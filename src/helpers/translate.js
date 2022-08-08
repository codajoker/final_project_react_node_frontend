import i18next from '../i18n';

export function translate(dictionary, product) {
  for (const [key, value] of Object.entries(dictionary)) {
    if (product === key) {
      switch (i18next.language) {
        case 'en': {
          return value.en;
        }

        case 'uk': {
          return value.ua;
        }

        case 'fr': {
          return value.fr;
        }

        case 'de': {
          return value.de;
        }

        case 'pl': {
          return value.pl;
        }

        default:
          break;
      }
    }
  }
}
