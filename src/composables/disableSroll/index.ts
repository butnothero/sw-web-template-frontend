import { isClient } from '@/helpers';
import { toggleBodyScroll } from '@butnothero/tools';

export const useDisableScroll = (key = '') => {
  const route = useRoute();

  const state = reactive({
    homeRoute: String(route.name) + key,
  });

  watch(
    () => route.name,
    (newRouteName) => {
      if (state.homeRoute !== newRouteName) {
        toggleBodyScroll('remove');
      } else {
        toggleBodyScroll('add');
        if (isClient) {
          window.scrollTo({ top: 0 });
        }
      }
    },
    { immediate: true },
  );
};
