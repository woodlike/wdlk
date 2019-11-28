require('dotenv').config();


module.exports = {
  siteMetadata: {
    siteName: 'Woodlike Ocean Store',
  },
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.SHOP_NAME,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
};
