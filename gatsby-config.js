const path = require('path');
const { description } = require('./package.json');
const { primary, secondary, lightGrey } = require('./src/styles/colors');

const cloud_id = `d33wubrfki0l68`;

const setFeed = (locale, title, output) => {
  return {
    serialize: ({ query: { site, allMarkdownRemark } }) =>
      allMarkdownRemark.edges.map(
        ({ node: { frontmatter, html, excerpt } }) => ({
          title: frontmatter.title,
          description: frontmatter.description || excerpt,
          date: frontmatter.date,
          categories: frontmatter.tags,
          author: frontmatter.authors ? frontmatter.authors
            .map(a => `${a.firstname} ${a.lastname}`)
            .join(`, `) : 'Tatiana Corallo-Jackson',
          url: site.siteMetadata.siteUrl + `/${locale}`,
          guid: site.siteMetadata.siteUrl + `/${locale}`,
          custom_elements: [{ 'content:encoded': html }]
        })
      ),
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
          authors {
            firstname
            lastname
          }
          tags
          date(formatString: "DD MMMM YYYY", locale: "${locale}")
        }
      }
    }
  }
}
`,
    title,
    output,
    setup: ({
      query: {
        site: { siteMetadata }
      }
    }) => ({
      title: siteMetadata.healine,
      description: siteMetadata.defaultDescription,
      feed_url: siteMetadata.siteUrl + output,
      site_url: siteMetadata.siteUrl,
      generator: siteMetadata.defaultTitle
    })
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://blog-consulting-and-integration.tessi.eu`
      }
    },
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
            resolve: `gatsby-remark-code-titles`,
            options: { className: `gatsby-remark-code-title` }
          },
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
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
            resolve: `gatsby-remark-smartypants`,
            options: { dashes: `oldschool` }
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: { icon: false }
          },
          `gatsby-remark-prismjs`
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tessi#Journey`,
        short_name: `T#J`,
        description,
        lang: `fr`,
        start_url: `/`,
        background_color: lightGrey,
        theme_color: primary,
        display: `standalone`,
        orientation: `portrait`,
        include_favicon: false,
        icon: `src/assets/manifest_logo.png`
      }
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        htmlFavicon: `static/icons/favicon.png`,
        htmlTitle: `Admin | Tessi#Journey`
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          '/*': [
            `X-UA-Compatible: IE=Edge`,
            `Content-Security-Policy: block-all-mixed-content; base-uri 'self'; default-src 'self' blob: data: ${cloud_id}.cloudfront.net raw.githubusercontent.com app.plezi.co www.google-analytics.com www.googleadservices.com www.googletagmanager.com googleads.g.doubleclick.net ; script-src 'self' 'unsafe-inline' 'unsafe-eval' www.googletagmanager.com www.google-analytics.com googleads.g.doubleclick.net www.googleadservices.com api.plezi.co app.plezi.co; style-src 'self' 'unsafe-inline'; object-src 'none'; form-action 'self'; font-src 'self' data: ${cloud_id}.cloudfront.net; connect-src 'self' app.plezi.co files.plezi.co api.plezi.co www.google-analytics.com www.googleadservices.com api.github.com`
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
