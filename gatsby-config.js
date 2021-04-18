module.exports = {
  siteMetadata: {
      description: "Personal page of Cory Serratore",
      title: "Cory Serratore",
      locale: "en",
      formspreeEndpoint: "https://formspree.io/f/xgervkqv"
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