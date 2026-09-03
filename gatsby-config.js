/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Intentional Society',
    description: 'Being who we want to be, together',
    // Read by gatsby-plugin-sitemap to build absolute URLs. Head2026 can't
    // reach siteMetadata (Gatsby's Head API renders outside the page's React
    // context, so no useStaticQuery), so it carries its own SITE_URL — keep
    // the two in step.
    siteUrl: 'https://www.intentionalsociety.org',
  },
  trailingSlash: 'never',
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
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        // Pages left out on purpose, not by oversight:
        //   /404, /404.html  — error pages
        //   /practices       — still carries its "Under Construction" banner
        //   /history, /orientation, /exploratory-practice-series
        //                    — reachable from nowhere in the nav, and the
        //                      series page describes a 2024 season in the
        //                      present tense
        // /contact and /branding are deliberately included: nothing links to
        // them either, but a sitemap is how someone is meant to find them.
        excludes: [
          '/404',
          '/404.html',
          '/practices',
          '/history',
          '/orientation',
          '/exploratory-practice-series',
        ],
      },
    },
  ],
}
