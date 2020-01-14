const locales = require(`./i18n`);

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

const defaultKey = findKey(locales, o => o.default === true);

module.exports = { localizeSlug, removeTrailingSlash, defaultKey };
