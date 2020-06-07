require('dotenv').config();

module.exports = {
  siteMetadata: {
    brand: 'Woodlike',
    siteName: 'Woodlike Ocean Store',
    siteUrl: 'https://woodlikeocean.com',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-json',
    'gatsby-plugin-theme-ui',
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
