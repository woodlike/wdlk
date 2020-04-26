/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { createCompiler } = require('@mdx-js/mdx');
const { createFilePath } = require('gatsby-source-filesystem');
const crypto = require('crypto');
const detectFrontmatter = require('remark-frontmatter');
const uuid = require('uuid');
const vfile = require('vfile');

const createDocsNode = init => ({
  id: init.id,
  docName: init.docName,
  parent: init.parent,
  children: [],
  transclusions: [],
  internal: {
    type: 'Document',
    contentDigest: init.internal.contentDigest,
    content: init.internal.content,
    ...(init.internal.description && { description: init.internal.description }),
  },
});

const createDocTransclusions = init => ({
  documentation: init.documentation,
  ...(init.codeDisplay && { codeDisplay: init.codeDisplay }),
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

const getFrontmatterName = mdxAst => {
  const node = mdxAst.children.find(node => node.type === 'yaml' && node.value);
  return node
    ? node.value
      .split(/\n/g)
      .splice(0, 1)
      .join('')
      .replace(/name:/g, '')
      .trim()
    : '';
};

const createDocs = nodes => {
  const mdxCompiler = createCompiler({ remarkPlugins: [detectFrontmatter] });
  const docs = [];

  nodes.forEach(node => {
    if (node.internal.type === 'Mdx') {
      const mdxAst = mdxCompiler.parse(vfile(node.internal.content));
      const codeDisplay = mdxAst.children.find(
        ({ type, value }) => typeof value === 'string' && value.includes('codeDisplay') && type === 'export',
      );

      const name = getFrontmatterName(mdxAst);
      const doc = docs.find(({ docName }) => docName && docName === name);

      if (doc) {
        doc.transclusions.push(
          createDocTransclusions({
            documentation: node.internal.content,
            ...(codeDisplay && { codeDisplay }),
          }),
        );
        return;
      }

      const initDocNode = {
        ...createDocsNode({
          id: uuid.v5(name, '1b671a64-40d5-491e-99b0-da01ff1f3341'),
          docName: name,
          parent: node.parent,
          children: Array.isArray(node.children) ? [...node.children] : [],
          internal: {
            content: node.internal.content,
            contentDigest: crypto
              .createHash('sha256')
              .update(name)
              .digest('hex'),
            ...(node.internal.description && { description: node.internal.description }),
          },
        }),
      };

      initDocNode.transclusions.push(
        createDocTransclusions({
          documentation: node.internal.content,
          ...(codeDisplay && { codeDisplay }),
        }),
      );
      docs.push(initDocNode);
    }
  });
  return docs;
};

exports.sourceNodes = ({ actions: { createNode }, getNodesByType }) =>
  createDocs(getNodesByType('Mdx')).forEach(node => createNode(node));

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Document') {
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
