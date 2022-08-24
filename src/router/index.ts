import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouterScrollBehavior,
} from 'vue-router';

// @ts-ignore
import generatedRoutes from 'virtual:generated-pages';
// @ts-ignore
import { setupLayouts } from 'virtual:generated-layouts';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route((/* { store, ssrContext } */) => {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: (to, from, savedPosition) => {
      if (to.name === from.name) {
        to.meta?.scrollPos && (to.meta.scrollPos.top = 0);
        return { left: 0, top: 0 };
      }
      const scrollpos = savedPosition || to.meta?.scrollPos || { left: 0, top: 0 };
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(scrollpos);
        }, 0);
      });
    },
    // routes: generatedRoutes,
    routes: setupLayouts(generatedRoutes),

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    from.meta?.scrollPos && (from.meta.scrollPos.top = window.scrollY);
    return next();
  });

  return Router;
});
