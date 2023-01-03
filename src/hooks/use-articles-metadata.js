import { graphql, useStaticQuery } from "gatsby";

export const useArticlesMetadata = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query ARTICLES_METADATA_QUERY {
        allMdx (sort: {frontmatter: {date: DESC}}) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              author
              image {
                childImageSharp {
                  gatsbyImageData(height: 432, width: 768)
                }
              }
              summary
              articleURL
            }
          }
        }
      }
    `
  );
  return allMdx.nodes.map((node) => {
    return {
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      author: node.frontmatter.author,
      image: node.frontmatter.image,
      summary: node.frontmatter.summary,
      articleURL: node.frontmatter.articleURL,
      slug: node.fields.slug,
    }
  })

};

export default useArticlesMetadata;
