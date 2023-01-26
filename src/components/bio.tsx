/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Bio = () => {
  const { site } = useStaticQuery<Queries.BioQueryQuery>(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            image
          }
          social {
            twitter
          }
        }
      }
    }
  `);
  const { siteMetadata } = site || {};

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = siteMetadata?.author;
  const social = siteMetadata?.social;

  console.log("siteMetadata", siteMetadata);

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        src={`https://avatars.githubusercontent.com/u/24849960`}
        formats={["auto", "webp", "avif"]}
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
      )}
    </div>
  );
};

export default Bio;
