import { boot } from 'quasar/wrappers';
import { Middleware, middlewareHandler } from '@/core/middlewares';

export default boot((ctx) => {
  const middlewareGlob = import.meta.globEager('@/middlewares/*.ts');
  const middlewares: Middleware[] = Object.keys(middlewareGlob).map(
    (key) => middlewareGlob[key].default,
  );
  const handler = middlewareHandler(ctx, middlewares);
  ctx.router.beforeEach(handler);
});
