import { boot } from 'quasar/wrappers';
import { installVueDirectives } from '@/directives';

export default boot(({ app }) => {
  installVueDirectives(app);
});
