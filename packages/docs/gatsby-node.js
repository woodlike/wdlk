/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { createCompiler } = require('@mdx-js/mdx');
const { createFilePath } = require('gatsby-source-filesystem');
const { resolve } = require('path');
const crypto = require('crypto');
const detectFrontmatter = require('remark-frontmatter');
const uuid = require('uuid');
const vfile = require('vfile');
const yaml = require('yaml');

const createDocsNode = init => ({
  id: init.id,
  docName: init.docName,
  parent: init.parent,
  children: [],
  frontmatter: init.frontmatter,
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

const getFrontmatter = mdxAst => {
  const node = mdxAst.children.find(node => node.type === 'yaml' && node.value);
  return node ? yaml.parse(node.value) : { name: '', menu: '' };
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

      const frontmatter = getFrontmatter(mdxAst);
      const doc = docs.find(({ docName }) => docName && docName === frontmatter.name);
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
          id: uuid.v5(frontmatter.name, '1b671a64-40d5-491e-99b0-da01ff1f3341'),
          docName: frontmatter.name,
          parent: node.parent,
          children: Array.isArray(node.children) ? [...node.children] : [],
          frontmatter,
          internal: {
            content: node.internal.content,
            contentDigest: crypto
              .createHash('sha256')
              .update(frontmatter.name)
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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allDocument {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const docs = result.data.allDocument.edges;
  docs.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: resolve(`./src/components/Layout.tsx`),
      context: { id: node.id },
    });
  });
};
