/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Intentional Society',
    description: "Being who we want to be, together"
  },
  trailingSlash: "never",
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-VWKBH9QTW5'],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-plugin-emotion', // handles Emotion SSR for MUI
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: './src/'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
  ],
}
