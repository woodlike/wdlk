require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteName: 'Woodlike Ocean Store',
    siteUrl: 'https://woodlikeocean.com',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.ACCESS_TOKEN,
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
