require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    brand: 'Woodlike',
    siteName: 'Woodlike Ocean Store',
    siteUrl: 'https://woodlikeocean.com',
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        buildMarkdownNodes: true,
      },
    },
    {
      resolve: 'gatsby-source-shopify',
      options: {
        accessToken: process.env.ACCESS_TOKEN,
        apiVersion: '2020-01',
        shopName: process.env.SHOP_NAME,
        verbose: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
  ],
};
