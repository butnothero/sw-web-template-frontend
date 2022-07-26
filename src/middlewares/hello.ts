import { defineMiddleware } from '@core/middlewares';

export default defineMiddleware('hello', async ({ next, redirect }) => {
  // const isServer = process.env.SERVER;
  //
  // if (!isServer) {
  //   next('/login');
  //   return false;
  // }
  //
  // redirect('/login');
  // next();
  // return false;
  console.log('👋 hello middleware');
  return true;
});
