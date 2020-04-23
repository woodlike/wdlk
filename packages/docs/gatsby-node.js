/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { createCompiler } = require('@mdx-js/mdx');
const { createFilePath } = require('gatsby-source-filesystem');
const { basename } = require('path');
const uuidv5 = require('uuid/v5');
const vfile = require('vfile');

const createDocsNode = init => ({
  id: init.id,
  baseName: init.baseName,
  parent: init.parent,
  children: [],
  transcluded: [],
  internal: {
    type: 'Document',
    content: init.content,
    description: init.description,
  },
});

const createDocTranscluded = init => ({
  documentation: init.documentation,
  display: init.display,
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

exports.sourceNodes = ({ getNodesByType }) => {
  const nodes = getNodesByType('Mdx');
  const mdxCompiler = createCompiler();
  const docCollection = [];
  const NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';
  nodes.forEach(node => {
    if (node.internal.type === 'Mdx') {
      const mdxAst = mdxCompiler.parse(vfile(node.internal.content));
      const displayNode = mdxAst.children.find(
        ({ type, value }) => typeof value === 'string' && value.includes('displayCode') && type === 'export',
      );
      const initDocNode = {
        ...createDocsNode({
          id: uuidv5(basename(node.fileAbsolutePath), NAMESPACE),
          baseName: basename(node.fileAbsolutePath),
          parent: node.parent,
          children: [],
          internal: {
            content: node.content,
            description: node.description,
          },
        }),
      };

      initDocNode.transcluded.push(
        createDocTranscluded({
          documentation: node.content,
          ...(displayNode && { display: displayNode }),
        }),
      );
      //TODO: merge documents of the same category
      // create Gatsby Node
      docCollection.push(initDocNode);
    }
  });
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

exports.createPages = async ({ graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            mdxAST
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
};
