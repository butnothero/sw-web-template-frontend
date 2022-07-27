import { defineMiddleware } from '@core/middlewares';
import { Cookies } from 'quasar';
import { useTokenStore } from '@/stores';

export default defineMiddleware('auth', async ({ ssrContext, redirect, next, isClient }) => {
  const tokenStore = useTokenStore();

  // --- CSR ---
  if (isClient) {
    if (tokenStore.getAccessToken()) return true;

    const isSuccessInit = await tokenStore.init();

    if (isSuccessInit) {
      return true;
    }

    // Если юзер не авторизован, переадресация на страницу входа
    next('/login');
    return false;
  }
  // --- SSR ---
  else {
    if (tokenStore.getAccessToken()) return true;

    const cookies = process.env.SERVER ? Cookies.parseSSR(ssrContext) : Cookies; // otherwise we're on client
    const accessTokenFromCookies: string | null = cookies.get('accessToken');

    if (accessTokenFromCookies) {
      tokenStore.setAccessToken(accessTokenFromCookies);
      return true;
    }

    // Если токен доступа отсутствует в куках, то переадресация на страницу авторизации
    redirect('/login');
    next();
    return false;
  }
});
