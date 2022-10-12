import { parseJwt } from '@butnothero/tools';

export const useTokenStore = defineStore('token', () => {
  const state = reactive({
    accessToken: '',
    currentUserId: '-1',
  });

  const getters = {
    getAccessToken() {
      return state.accessToken;
    },

    getCurrentUserId() {
      return state.currentUserId;
    },
  };

  const actions = {
    setCurrentUserId(userId = '') {
      state.currentUserId = userId;
    },

    setAccessToken(accessToken = '') {
      state.accessToken = accessToken;
    },

    async init(): Promise<boolean> {
      try {
        // const { data } = await apiAuth.getAccessToken();
        // if (data?.accessToken) {
        //   state.accessToken = data.accessToken;
        //   state.currentUserId = parseJwt(state.accessToken)?.userId;
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
