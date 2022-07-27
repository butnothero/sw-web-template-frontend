import { defineMiddleware } from '@/core/middlewares';
import { useTokenStore } from '@/stores';
import { Cookies } from 'quasar';

export default defineMiddleware(
  'guestOnly',
  ({ ssrContext, next, redirect, urlPath, isClient }) => {
    if (urlPath.includes('force')) {
      return true;
    }

    if (isClient) {
      const tokenStore = useTokenStore();

      if (tokenStore.getAccessToken()) {
        next('/');
        return false;
      }

      return true;
    }

    const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies; // otherwise we're on client

    if (cookies.get('accessToken')) {
      redirect('/');
      next();
      return false;
    }

    return true;
  },
);
