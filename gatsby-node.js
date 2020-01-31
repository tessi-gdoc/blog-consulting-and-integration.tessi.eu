const path = require(`path`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const locales = require(`./src/i18n`);
const kebabCase = require(`lodash.kebabcase`);
const {
  removeTrailingSlash,
  defaultKey,
  localizeSlug
} = require(`./src/gatsby-helpers`);

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  Object.keys(locales).map(lang => {
    const { default: isDefault, path } = locales[lang];
    const localizedPath = isDefault
      ? removeTrailingSlash(page.path)
      : `${path}${page.path}`;

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        ...page.context,
        locale: lang,
        isDefault
      }
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const name = path.basename(node.fileAbsolutePath, `.md`);
    const isDefault = name === `index.${defaultKey}`;
    const lang = isDefault ? defaultKey : name.split(`.`)[1];
    createNodeField({ name: `locale`, node, value: lang });
    createNodeField({ name: `isDefault`, node, value: isDefault });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        allFile(
          filter: { relativeDirectory: { regex: "/^(posts|notices)/" } }
        ) {
          edges {
            node {
              id
              relativeDirectory
              childMarkdownRemark {
                fields {
                  locale
                  isDefault
                }
                frontmatter {
                  key
                  path
                  title
                }
              }
            }
          }
        }
        tagsGroup: allFile(
          filter: { relativeDirectory: { regex: "/^(posts|news)/" } }
        ) {
          edges {
            node {
              childMarkdownRemark {
                fields {
                  locale
                  isDefault
                }
              }
            }
          }
          group(field: childMarkdownRemark___frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const files = result.data.allFile.edges;

    files.forEach(({ node }) => {
      const { key, title, path: uri } = node.childMarkdownRemark.frontmatter;
      const { locale, isDefault } = node.childMarkdownRemark.fields;
      const localizedSlug = localizeSlug(
        isDefault,
        locale,
        uri ? `posts/${uri}` : node.relativeDirectory
      );
      createPage({
        path: localizedSlug,
        component: path.resolve(`src/templates/${key}.js`),
        context: { slug: localizedSlug, locale, isDefault, title }
      });
    });

    const tags = result.data.tagsGroup;

    tags.edges.forEach(({ node }) => {
      const { locale, isDefault } = node.childMarkdownRemark.fields;
      tags.group.forEach(({ fieldValue }) => {
        const localizedSlug = localizeSlug(
          isDefault,
          locale,
          kebabCase(fieldValue)
        );
        createPage({
          path: localizedSlug,
          component: path.resolve(`src/templates/tag.js`),
          context: { tag: fieldValue, slug: localizedSlug, locale }
        });
      });
    });
  });
};
