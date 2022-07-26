export const useCurrentAuthUserStore = defineStore('currentAuthUser', {
  state: () => ({
    accessToken: '',
  }),

  getters: {
    getAccessToken: (state) => state.accessToken,
  },

  actions: {
    setAccessToken(accessToken: string) {
      this.$patch((state) => {
        state.accessToken = accessToken;
      });
    },
  },
});
