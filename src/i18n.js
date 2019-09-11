const { frLocale } = require('date-fns/locale/fr');

module.exports = {
  fr: {
    default: true,
    path: `fr`,
    locale: `fr-FR`,
    dateFormat: frLocale,
    countries: {
      FR: 'France',
      SP: 'Espagne',
      UK: 'Royaume-uni',
      CH: 'Suisse'
    }
  }
};
