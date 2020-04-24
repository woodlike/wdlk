/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { createCompiler } = require('@mdx-js/mdx');
const { createFilePath } = require('gatsby-source-filesystem');
const { basename } = require('path');
const uuid = require('uuid');
const vfile = require('vfile');

const createDocsNode = init => ({
  id: init.id,
  baseName: init.baseName,
  parent: init.parent,
  children: [],
  transclusions: [],
  internal: {
    type: 'Document',
    content: init.content,
    description: init.description,
  },
});

const createDocTranscluded = init => ({
  documentation: init.documentation,
  ...(init.display ? { display: init.display } : null),
});

const sanitizeSlugPath = value => {
  if (typeof value !== 'string') {
    return;
  }
  const strings = value.split('/');
  const idx = strings.findIndex(str => str === 'content');
  // Comparing idx with 1 because Gatsby interprets Boolean(-1) as truthy
  return strings.splice(idx === 1 ? idx + 1 : 1, 1).join('/');
};

exports.sourceNodes = ({ actions, getNodesByType }) => {
  const { createNode } = actions;
  const nodes = getNodesByType('Mdx');
  const mdxCompiler = createCompiler();
  const docs = [];

  nodes.forEach(node => {
    if (node.internal.type === 'Mdx') {
      const mdxAst = mdxCompiler.parse(vfile(node.internal.content));
      const displayNode = mdxAst.children.find(
        ({ type, value }) => typeof value === 'string' && value.includes('displayCode') && type === 'export',
      );
      const doc = docs.find(({ baseName }) => baseName && baseName === basename(node.fileAbsolutePath));
      if (doc) {
        doc.transclusionList.push(
          createDocTranscluded({
            documentation: node.internal.content,
            ...(displayNode && { display: displayNode }),
          }),
        );
        return;
      }

      const initDocNode = {
        ...createDocsNode({
          id: uuid.v5(basename(node.fileAbsolutePath), '1b671a64-40d5-491e-99b0-da01ff1f3341'),
          baseName: basename(node.fileAbsolutePath),
          parent: node.parent,
          children: Array.isArray(node.children) ? [...node.children] : [],
          internal: {
            content: node.internal.content,
            ...(node.internal.description && { description: node.internal.description }),
          },
        }),
      };

      initDocNode.transclusions.push(
        createDocTranscluded({
          documentation: node.internal.content,
          ...(displayNode && { display: displayNode }),
        }),
      );
      docs.push(initDocNode);
    }
  });
  //TODO: include proper content, contentDigest and description
  //TODO: createNode
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    const path =
      node.frontmatter && node.frontmatter.menu
        ? `${node.frontmatter.menu.toLowerCase()}/${sanitizeSlugPath(value)}`
        : `${sanitizeSlugPath(value)}`;
    createNodeField({
      name: 'slug',
      node,
      value: `/${path}`,
    });
  }
};

// exports.createPages = async ({ graphql, reporter }) => {
//   const result = await graphql(`
//     query {
//       allMdx {
//         edges {
//           node {
//             id
//             fields {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `);
//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
//   }
// };
