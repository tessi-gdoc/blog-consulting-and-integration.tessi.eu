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
            home
            demo
            resources
            whitepapers
            kits
            caseStudies
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
            offers
            about {
              title
              content
            }
            convinced
            tags
            demoPage {
              title
              rightContent
              leftContent
            }
            readArticle
            readCaseStudy
            downloadWhitepaper
            downloadKit
            relatedPosts
            partners
          }
        }
      }
    }
  }
`;
