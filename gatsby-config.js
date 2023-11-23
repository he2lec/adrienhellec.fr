/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const netlify = require(`gatsby-adapter-netlify`).default

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Adrien Hellec`,
    description: `I am Adrien Hellec, a French engineer student in computer science loving DevOps and Full-Stack Web/Software development.`,
    author: `Adrien Hellec <number-fluency0r@icloud.com>`,
    siteUrl: `https://adrienhellec.fr`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
  ],
  adapter: netlify(),
}
