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
              form {
                mail
                title
                name
              }
              submit
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
              content
              form {
                company
                last_name
                first_name
                email
                phone
                where_are_you_based
                what_is_the_time_frame_you_have_for_planning_your_project
                which_of_our_expertises_are_you_interested_in
                details_on_your_project
                expertises
                timeFrame
                gdpr
              }
              gdprNotice
              moreGdpr
              submit
            }
            readArticle
            readCaseStudy
            downloadWhitepaper
            downloadKit
            relatedPosts
            partners
            messages {
              required
              invalidMail
              invalidPhone
              uncheckedGDPR
              error
              loading
              success
            }
          }
        }
      }
    }
  }
`;
