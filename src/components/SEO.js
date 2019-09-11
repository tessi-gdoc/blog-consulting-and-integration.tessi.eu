import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import useTranslations from '@hooks/use-translations';
import { str } from '@utils';

const SEO = ({
  lang,
  title,
  description,
  image,
  authors,
  publishDate,
  pathname,
  article
}) => {
  const [t] = useTranslations();
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            defaultDescription,
            titleAlt,
            headline,
            author,
            logo,
            siteUrl
          },
          buildTime
        }
      }) => {
        const seo = {
          title: article ? title : t[title],
          description: description || defaultDescription,
          image: `${siteUrl}${image || logo}`,
          author: authors && authors.length > 0 ? authors.join` & ` : author,
          url: `${siteUrl}${pathname || `/`}`
        };

        const date = `${new Date().getFullYear()}`;

        return (
          <Helmet title={seo.title} titleTemplate={`%s - ${defaultTitle}`}>
            <html lang={lang} />
            <meta property="image" content={seo.image} />
            <meta name="description" content={seo.description} />
            {!article && (
              <script type="application/ld+json">
                {str({
                  '@context': 'http://schema.org',
                  '@type': 'WebPage',
                  '@id': seo.url,
                  url: seo.url,
                  headline,
                  inLanguage: lang,
                  mainEntityOfPage: siteUrl,
                  description: defaultDescription,
                  name: defaultTitle,
                  alternateName: titleAlt,
                  author: {
                    '@type': 'Organization',
                    name: author
                  },
                  copyrightHolder: {
                    '@type': 'Organization',
                    name: author
                  },
                  copyrightYear: date,
                  creator: {
                    '@type': 'Organization',
                    name: author
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: author
                  },
                  datePublished: buildTime,
                  image: {
                    '@type': 'ImageObject',
                    url: seo.image
                  }
                })}
              </script>
            )}
            {article && (
              <script type="application/ld+json">
                {str({
                  '@context': 'http://schema.org',
                  '@type': 'BlogPosting',
                  '@id': seo.url,
                  author: {
                    '@type': 'Person',
                    name: seo.author
                  },
                  copyrightHolder: {
                    '@type': 'Person',
                    name: seo.author
                  },
                  copyrightYear: date,
                  creator: {
                    '@type': 'Person',
                    name: seo.author
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: author,
                    logo: {
                      '@type': 'ImageObject',
                      url: seo.image
                    }
                  },
                  datePublished: publishDate,
                  description: seo.description,
                  headline: seo.title,
                  inLanguage: lang,
                  url: seo.url,
                  name: seo.title,
                  alternateName: titleAlt,
                  image: {
                    '@type': 'ImageObject',
                    url: seo.image
                  },
                  isPartOf: siteUrl,
                  mainEntityOfPage: {
                    '@type': 'WebSite',
                    '@id': seo.url
                  }
                })}
              </script>
            )}
            {/* OpenGraph  */}
            <meta property="og:url" content={seo.url} />
            <meta
              property="og:type"
              content={article ? 'article' : 'website'}
            />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="tessigroupe" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
          </Helmet>
        );
      }}
    />
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.array,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  publishDate: PropTypes.string
};

SEO.defaultProps = {
  lang: `fr`,
  title: null,
  authors: undefined,
  description: null,
  pathname: null,
  image: null,
  article: false,
  publishDate: null
};

export default SEO;

const query = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        defaultTitle
        defaultDescription
        titleAlt
        headline
        author
        logo
        siteUrl
      }
    }
  }
`;
