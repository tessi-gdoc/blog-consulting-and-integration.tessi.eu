import { useContext } from 'react';
import { find, pathEq, path, pipe } from 'ramda';
import { useStaticQuery, graphql } from 'gatsby';

import { LocaleContext } from '../Layout';

const findTranslations = locale =>
  pipe(find(pathEq(['node', 'name'], locale)), path(['node', 'translations']));

const useTranslations = () => {
  const locale = useContext(LocaleContext);
  const getFromQuery = findTranslations(locale);
  const { rawData } = useStaticQuery(query);
  return [getFromQuery(rawData.edges)];
};

export default useTranslations;

const query = graphql`
  query useTranslations {
    rawData: allFile(filter: { sourceInstanceName: { eq: "translations" } }) {
      edges {
        node {
          name
          translations: childTranslationsJson {
            notFound
            subtitle
            service
            website
            follow
            contact
            allArticles
            blog
            demo
            resources
            whitepapers
            kits
            videos
            webinars
            caseStudies
            thankYou
            form {
              failed
              backToHome
            }
            newsletter {
              title
              content
            }
            thankYouPage {
              title
              subtitle
              content
              cta
            }
            offers {
              text
              link
            }
            about {
              title
              content
            }
            convinced
            tags {
              news
              contentServices
              ccm
              caseManagement
              customerJourney
            }
            demoPage {
              title
              subtitle
              rightContent
              leftContent
            }
            readArticle
            readNews
            readCaseStudy
            downloadWhitepaper
            downloadKit
            watchVideos
            watchWebinar
            tableOfContents
            relatedPosts
            partners
            siteMetadata {
              home {
                title
                description
              }
              cookies {
                title
                description
              }
              personalDataUsePolicy {
                title
                description
              }
              disclaimer {
                title
                description
              }
              demo {
                title
                description
              }
              ourCaseStudies {
                title
                description
              }
              kits {
                title
                description
              }
              whitepapers {
                title
                description
              }
              thankYou {
                title
                description
              }
              news {
                title
                description
              }
              contentServices {
                title
                description
              }
              ccm {
                title
                description
              }
              caseManagement {
                title
                description
              }
              customerJourney {
                title
                description
              }
              videos {
                title
                description
              }
              webinars {
                title
                description
              }
            }
          }
        }
      }
    }
  }
`;
