const path = require(`path`);
const { fmImagesToRelative } = require('gatsby-remark-relative-images');
const { createFilePath } = require(`gatsby-source-filesystem`);
const locales = require(`./src/i18n`);
const kebabCase = require(`lodash.kebabcase`);

const localizeSlug = (isDefault, locale, slug) =>
  isDefault ? slug : `/${locale}${slug}`;

const removeTrailingSlash = path =>
  path === `/` ? path : path.replace(/\/$/, ``);

const findKey = (object, predicate) => {
  let result;
  if (object == null) {
    return result;
  }
  Object.keys(object).some(key => {
    const value = object[key];
    if (predicate(value, key, object)) {
      result = key;
      return true;
    }
    return false;
  });
  return result;
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);

  Object.keys(locales).map(lang => {
    const localizedPath = locales[lang].default
      ? removeTrailingSlash(page.path)
      : `${locales[lang].path}${page.path}`;

    const { dateFormat, countries } = locales[lang];
    return createPage({
      ...page,
      path: localizedPath,
      context: {
        ...page.context,
        locale: lang,
        dateFormat,
        countries
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

  if (node.internal.type === `MarkdownRemark`) {
    const name = path.basename(node.fileAbsolutePath, `.md`);
    const splittedName = name.split(`.`);
    const isDefault = splittedName.length === 1;
    const defaultKey = findKey(locales, o => o.default === true);
    const lang = isDefault ? defaultKey : splittedName[1];
    const value = createFilePath({ node, getNode });
    const slug = isDefault
      ? removeTrailingSlash(value)
      : value.replace(/.[a-z]{2}\/$/, ``);

    createNodeField({ name: `slug`, node, value: slug });
    createNodeField({ name: `locale`, node, value: lang });
    createNodeField({ name: `isDefault`, node, value: isDefault });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(
    `
      {
        postRemark: allMarkdownRemark(
          filter: { fields: { slug: { regex: "/^/(posts|notices)//" } } }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
                locale
                isDefault
              }
              frontmatter {
                templateKey
              }
            }
          }
        }
        tagsGroup: allMarkdownRemark(
          filter: { fields: { slug: { regex: "/^/(posts|news)//" } } }
          limit: 2000
        ) {
          edges {
            node {
              fields {
                locale
                isDefault
              }
            }
          }
          group(field: frontmatter___tags) {
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

    const files = result.data.postRemark.edges;

    files.forEach(({ node }) => {
      const { slug, locale, isDefault } = node.fields;
      const localizedSlug = localizeSlug(isDefault, locale, slug);
      createPage({
        path: localizedSlug,
        component: path.resolve(
          `src/templates/${node.frontmatter.templateKey}.js`
        ),
        context: { slug: localizedSlug, locale }
      });
    });

    const tags = result.data.tagsGroup;

    tags.edges.forEach(({ node }) => {
      const { locale, isDefault } = node.fields;
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
