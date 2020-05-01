/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { createFilePath } = require('gatsby-source-filesystem');

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
});

const doc = require('./gatsby/collect-content');

const sanitizeSlugPath = value => {
  if (typeof value !== 'string') {
    return;
  }
  const strings = value.split('/');
  const idx = strings.findIndex(str => str === 'content');
  // Comparing idx with 1 because Gatsby interprets Boolean(-1) as truthy
  return strings.splice(idx === 1 ? idx + 1 : 1, 1).join('/');
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const blat = await doc.collect();
    console.log('****_______++++++');
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
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

// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     query {
//       allDocument {
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

//   const docs = result.data.allDocument.edges;
//   docs.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: join(__dirname, 'node_modules/gatsby-theme-docz/src/base/Layout.js'),
//       context: { id: node.id },
//     });
//   });
// };
