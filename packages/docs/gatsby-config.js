module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'documents',
        path: `${__dirname}/content/`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-theme-ui',
  ],
};
