import App from './App.svelte';
import { setupI18n } from 'i18n';

setupI18n();

const app = new App({
  target: document.body,
  props: {
    name: 'world',
  },
});


export default app;
