/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { createFilePath } = require('gatsby-source-filesystem');

const sanitizePath = value => {
  if (typeof value !== 'string') {
    return;
  }
  const strings = value.split('/');
  const idx = strings.findIndex(str => str === 'content');
  console.log('^^^^^', strings);
  return strings.splice(Boolean(idx) ? idx + 1 : 1, 1);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    const path =
      node.frontmatter && node.frontmatter.menu ? `${node.frontmatter.menu.toLowerCase()}${value}` : `${value}`;
    console.log('======///', sanitizePath(value));
    createNodeField({
      name: 'slug',
      node,
      value: `/${path}`,
    });
  }
};
