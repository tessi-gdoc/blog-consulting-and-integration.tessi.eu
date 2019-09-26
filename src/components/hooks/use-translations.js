import { useContext } from 'react';
import { find, pathEq, path, pipe } from 'ramda';
import { useStaticQuery, graphql } from 'gatsby';

import { LocaleContext } from '../Layout';

const findTranslations = locale =>
  pipe(
    find(pathEq(['node', 'name'], locale)),
    path(['node', 'translations'])
  );

const useTranslations = () => {
  const { locale, dateFormat, countries } = useContext(LocaleContext);
  const getFromQuery = findTranslations(locale);
  const { rawData } = useStaticQuery(query);
  return [getFromQuery(rawData.edges), dateFormat, countries];
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
            caseStudies
            thankYou
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
            tags
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
              caseStudies {
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
            }
          }
        }
      }
    }
  }
`;
