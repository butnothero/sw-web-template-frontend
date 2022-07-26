import { boot } from 'quasar/wrappers';
import NProgress from 'nprogress';

export default boot(({ router }) => {
  const isServer = process.env.SERVER;

  if (!isServer) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
});
