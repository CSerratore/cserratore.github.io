

const siteMetadata = {
  title: `Cory Serratore`,
  description: `This is my website.`,
  siteUrl: `https://www.coryserratore.com`,
};

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content/posts`,
      },
      __key: 'posts'
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          }
        ],
      },
    },
  ],
}
