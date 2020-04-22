/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const { createFilePath } = require('gatsby-source-filesystem');

const sanitizeSlugPath = value => {
  if (typeof value !== 'string') {
    return;
  }
  const strings = value.split('/');
  const idx = strings.findIndex(str => str === 'content');
  // Coparing idx with 1 because Gatsby interprets Boolean(-1) as truthy
  return strings.splice(idx === 1 ? idx + 1 : 1, 1).join('/');
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
