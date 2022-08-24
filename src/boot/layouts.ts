import { boot } from 'quasar/wrappers';
import CacheLayout from '@/layouts/cache.vue';

export default boot(({ app }) => {
  app.component('CacheLayout', CacheLayout);
});
