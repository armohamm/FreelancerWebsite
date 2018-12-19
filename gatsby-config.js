module.exports = {
  siteMetadata: {
    title: 'Jon Preece Freelance/Contract Full Stack Professional Web Developer',
    description:
      'The personal website of Jon Preece, a full stack web developer with a long track record of building professional websites for big business.',
    author: 'Jon Preece',
    icon: 'src/images/favicon.png',
    twitterHandle: 'jpreecedev'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-42743116-4'
      }
    }
  ]
}
