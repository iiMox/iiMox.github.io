/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem` /* specify the plugin name*/,
      options: {
        name: `services` /* or any name you want */,
        path: `${__dirname}/src/images/services/` /* specify where the files that we want to add t our graphQL layer */,
      },
    },
    {
      resolve: `gatsby-source-filesystem` /* specify the plugin name*/,
      options: {
        name: `projects` /* or any name you want */,
        path: `${__dirname}/src/images/projects/` /* specify where the files that we want to add t our graphQL layer */,
      },
    },
  ],
}
