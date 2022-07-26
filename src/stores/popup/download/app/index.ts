export const usePopupDownloadAppStore = defineStore('popupDownloadApp', {
  state: () => ({
    is: {
      active: false,
    },
  }),

  getters: {
    getIsActive: (state) => state.is.active,
  },

  actions: {
    setActive(value: boolean) {
      this.$patch((state) => {
        state.is.active = value;
      });
    },

    toggleActive() {
      this.$patch((state) => {
        state.is.active = !state.is.active;
      });
    },
  },
});
