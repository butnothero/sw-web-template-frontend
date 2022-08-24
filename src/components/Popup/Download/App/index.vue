<script setup lang="ts">
import { useCurrentAuthUserStore, usePopupDownloadAppStore } from '@/stores';
import { Page } from '@/enums';
import { createToast } from '@components/Toast/lib';

const curAuthUser = useCurrentAuthUserStore();
const popupDownloadApp = usePopupDownloadAppStore();
const route = useRoute();

const close = () => {
  popupDownloadApp.setActive(false);
};

const toDownloadApp = () => {
  // TODO: Добавить ссылку на скачивание приложения
  createToast('Упс. Что-то пошло не так :(', {
    position: 'top-center',
    type: 'warning',
    transition: 'zoom',
    hideProgressBar: true,
  });
  close();
};

watch(
  () => route.name,
  () => {
    popupDownloadApp.$reset();
  },
);
</script>

<template lang="pug">
Popup(v-model='popupDownloadApp.is.active', :show-cross='false', max-width='500px')
  template(#header)
    button.download-app__close(@click='close') Закрыть
  .download-app
    .download-app__logo
      ImageAppLogo
    Button.download-app__btn(
      @click='toDownloadApp',
      text='Скачай приложение',
      :class-mods='["text-sm", "w-full"]'
    )
    router-link.download-app__login(v-if='!curAuthUser.getIsAuth', :to='{ name: Page.LOGIN }') Или войди в свой аккаунт
    .download-app__text Ты сможешь подписываться на авторов, оставлять комментарии и участвовать в мероприятиях
</template>

<style scoped lang="scss">
.download-app {
  &__logo {
    @apply text-center;
  }

  &__btn {
    @apply mt-30px;
  }

  &__text {
    @apply text-white text-16px font-[300] text-center mt-15px leading-6;
  }

  &__close {
    @apply absolute right-0 p-10px reset-btn text-gray-200 ml-auto text-14px;
  }

  &__login {
    @apply w-full mt-15px py-5px text-center text-purple;
  }
}
</style>
