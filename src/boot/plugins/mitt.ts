import { boot } from 'quasar/wrappers';
import mitt from 'mitt';

export default boot(async ({ app }) => {
  app.config.globalProperties.emitter = mitt();
});
