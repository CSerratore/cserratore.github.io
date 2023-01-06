import { graphql, useStaticQuery } from "gatsby";

export const useArticlesMetadata = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
    query ARTICLES_METADATA_QUERY {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
              summary
              title
              date(formatString: "MMMM Do, YYYY")
              imageAlt
              author
              image {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, width: 380)
                }
              }
            }
          }
        }
      }
    }
    `
  );
  return allMarkdownRemark.edges.map((edge) => {
    return {
      title: edge.node.frontmatter.title,
      date: edge.node.frontmatter.date,
      author: edge.node.frontmatter.author,
      image: edge.node.frontmatter.image,
      summary: edge.node.frontmatter.summary,
      articleURL: edge.node.frontmatter.articleURL,
      slug: edge.node.frontmatter.slug,
    };
  })

};

export default useArticlesMetadata;
