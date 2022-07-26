import { boot } from 'quasar/wrappers';
import { installI18n } from '@/plugins/i18n';

export default boot(async ({ app }) => {
  // TODO: Добавить динамическую загрузку языка исходя из cookies
  await installI18n(app, 'ru');
});
