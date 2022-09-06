module.exports = {
  siteMetadata: {
      description: "Personal page of Cory Serratore",
      title: "Cory Serratore",
      locale: "en"
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        theme: "blue",
        showThemeLogo: false,
      },
    },
  ],
}