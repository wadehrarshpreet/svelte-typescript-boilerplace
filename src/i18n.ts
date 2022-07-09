import * as i18n from 'svelte-i18n';

import en from 'locale/en';
import es from 'locale/es';

export function setupI18n() {
  i18n.addMessages('en-US', en);
  i18n.addMessages('es', es);
  i18n.init({
    fallbackLocale: 'en-US',
    initialLocale: i18n.getLocaleFromNavigator(),
  });
}
export * from 'svelte-i18n';
