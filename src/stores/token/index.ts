// import { apiAuth } from '@/services';

export const useTokenStore = defineStore('token', () => {
  const state = reactive({
    accessToken: '',
  });

  const getters = {
    getAccessToken() {
      return state.accessToken;
    },
  };

  const actions = {
    setAccessToken(accessToken: string) {
      state.accessToken = accessToken;
    },

    async init(): Promise<boolean> {
      try {
        // const response = await apiAuth.getAccessToken();
        // if (response?.accessToken) {
        //   state.accessToken = response.accessToken;
        //   return true;
        // }
        return false;
      } catch (e) {
        console.error('', e);
        return false;
      }
    },
  };

  return {
    ...actions,
    ...getters,
  };
});
