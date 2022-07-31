import i18next from '../i18n';

export function translate(dictionary, product) {
  for (const [key, value] of Object.entries(dictionary)) {
    if (product === key) {
      if (i18next.language === 'en') {
        return value.en;
      } else {
        return value.ua;
      }
    }
  }
}
