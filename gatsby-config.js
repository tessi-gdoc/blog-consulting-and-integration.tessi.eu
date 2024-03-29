const path = require('path');
const { secondary } = require('./src/styles/colors');
const { defaultKey } = require('./src/gatsby-helpers');

//const cloud_id = `d33wubrfki0l68`;

const setFeed = (locale, title, output) => {
  return {
    title,
    query: `
{
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { key: { regex: "/(news|blog-post)/" } }, fields: { locale: { eq: "${locale}" } } }
  ) {
    edges {
      node {
        html
        excerpt(pruneLength: 150)
        frontmatter {
          title
          description
          author {
            fullname
          }
          link
          path
          tags
          date
        }
      }
    }
  }
}
`,
    output,
    setup: ({
      query: {
        site: { siteMetadata }
      }
    }) => ({
      title,
      description: siteMetadata.defaultDescription,
      feed_url: siteMetadata.siteUrl + output,
      site_url: siteMetadata.siteUrl,
      generator: `GatsbyJS`
    }),
    serialize: ({ query: { site, allMarkdownRemark } }) =>
      allMarkdownRemark.edges.map(
        ({ node: { frontmatter, html, excerpt } }) => {
          const localeSegment = locale === defaultKey ? `` : `/${locale}`;
          const postBaseUrl = `${site.siteMetadata.siteUrl}${localeSegment}/posts/`;
          const { author, tags, description, date } = frontmatter;
          return Object.assign({}, frontmatter, {
            description: description || excerpt,
            date,
            categories: tags,
            author: author ? author.fullname : 'Tatiana Corallo-Jackson',
            url: frontmatter.link || `${postBaseUrl}${frontmatter.path}`,
            guid: frontmatter.link || `${postBaseUrl}${frontmatter.path}`,
            custom_elements: [{ 'content:encoded': html }]
          });
        }
      )
  };
};

module.exports = {
  siteMetadata: {
    defaultTitle: `Tessi#Journey`,
    titleAlt: `Tessi Consulting & Integration Blog`,
    defaultDescription: `Consultancy and integration company providing document management expertise, specialising ECM + CCM. We support blue chip companies in adding value to their communications and empowering their Front-Office staff to improve the Customer Experience`,
    headline: `Tessi Blog Consulting and integration`,
    author: `Tessi Group. <www.tessi.eu>`,
    logo: `/icons/apple-touch-icon.png`,
    officialWebsite: `https://www.tessi.eu`,
    siteUrl: `https://blog-consulting-and-integration.tessi.eu`,
    contactMail: `tatiana.corallo-jackson@tessi.fr`,
    social: [
      {
        name: `linkedin`,
        link: `https://linkedin.com/company/gdoc`
      },
      {
        name: `twitter`,
        link: `https://twitter.com/tessigroupe`
      },
      {
        name: `youtube`,
        link: `https://www.youtube.com/channel/UCKlc2WBfBrnvwEFtwvPiH_Q`
      }
    ],
    menu: [
      {
        label: `blog`,
        slug: `/`
      },
      {
        label: `resources`,
        slug: `/whitepapers`,
        items: [
          {
            label: `whitepapers`,
            slug: `/whitepapers`
          },
          {
            label: `kits`,
            slug: `/kits`
          },
          {
            label: `videos`,
            slug: `/videos`
          },
          {
            label: `webinars`,
            slug: `/webinars`
          }
        ]
      },
      {
        label: `caseStudies`,
        slug: `/our-case-studies`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: `uploads`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/translations`,
        name: `translations`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        gfm: true,
        commonmark: true,
        footnotes: true,
        pedantic: true,
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              related: false,
              noIframeBorder: true
            }
          },
          {
            resolve: `gatsby-remark-code-titles`,
            options: { className: `gatsby-remark-code-title` }
          },
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: true,
              maxWidth: 1920,
              quality: 90
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: { wrapperStyle: `margin-bottom: 1.5rem` }
          },
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: { destinationDir: `static` }
          },
          {
            resolve: `gatsby-remark-autolink-headers`
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: { color: secondary, showSpinner: false }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                defaultTitle
                defaultDescription
                headline
                author
                siteUrl
              }
            }
          }
        `,
        feeds: [setFeed('fr', 'Nos articles et actualités', '/rss.xml')]
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@utils': path.resolve(__dirname, 'src/utils'),
          '@i18n': path.resolve(__dirname, 'src/i18n'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@hooks': path.resolve(__dirname, 'src/components/hooks'),
          '@icons': path.resolve(__dirname, 'src/components/Icon'),
          '@templates': path.resolve(__dirname, 'src/templates'),
          '@colors': path.resolve(__dirname, 'src/styles/colors'),
          '@media': path.resolve(__dirname, 'src/styles/media'),
          '@static': path.resolve(__dirname, 'static/')
        }
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlFavicon: `static/icons/favicon.png`,
        htmlTitle: `Admin | Tessi#Journey`,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            `X-UA-Compatible: IE=Edge`,
            `Content-Security-Policy: block-all-mixed-content; base-uri 'self'; default-src * 'self' blob: data:; script-src * 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; object-src 'none'; form-action 'self'; font-src * 'self' data:; connect-src * blob: 'self'`
          ],
          '/icons/*.png': [`cache-control: public, max-age=31536000,immutable`],
          '/jquery.min.js': [
            `cache-control: public, max-age=31536000,immutable`
          ],
          '/cookies-eu-banner.js': [
            `cache-control: public, max-age=31536000,immutable`
          ]
        }
      }
    },
    `gatsby-plugin-netlify-cache`
  ]
};
