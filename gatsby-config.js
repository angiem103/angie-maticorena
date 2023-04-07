/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Angie Maticorena`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-transformer-sharp`, `gatsby-plugin-sharp`
  , {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }
]
};



// module.exports = {
//   plugins: [
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `images`,
//         path: path.join(__dirname, `src`, `images`),
//       },
//     },
//     `gatsby-plugin-sharp`,
//     `gatsby-transformer-sharp`,
//   ],
// }
