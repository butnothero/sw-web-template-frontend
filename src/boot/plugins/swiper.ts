import { boot } from 'quasar/wrappers';
import { defineAsyncComponent } from 'vue';

export default boot(({ app }) => {
  app.component(
    'Swiper',
    defineAsyncComponent(async () => {
      const { Swiper } = await import('swiper/vue');

      return Swiper;
    }),
  );

  app.component(
    'SwiperSlide',
    defineAsyncComponent(async () => {
      const { SwiperSlide } = await import('swiper/vue');

      return SwiperSlide;
    }),
  );
});
