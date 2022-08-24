import { App } from 'vue';

export const vueLazy = (app: App) => {
  app.directive('lazy', {
    beforeMount(el, binding, vnode) {
      el.classList.add('lazyload');
      el.setAttribute('data-src', binding.value);
    },
  });
};
