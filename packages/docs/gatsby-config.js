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
    'gatsby-plugin-typescript',
    'gatsby-transformer-sharp',
    'gatsby-plugin-offline',
  ],
};
