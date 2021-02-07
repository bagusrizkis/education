module.exports = {
  siteMetadata: {
    siteTitle: `Hacktiv8 Lecture Notes`,
    defaultTitle: `Lecture Notes`,
    siteTitleShort: `Lecture Notes`,
    siteDescription: `Notes for Hacktiv8 student in phase preparation`,
    siteUrl: `https://prep.rizkis.dev/`,
    siteAuthor: `@rocketseat`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/bagusrizkis/lectureH8`,
        baseDir: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hacktiv8 Lecture Notes`,
        short_name: `H8 Lecture`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://prep.rizkis.dev/`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
