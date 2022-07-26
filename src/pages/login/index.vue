<script setup lang="ts">
// TODO: В блок route добавить middleware guestOnly
import { useMeta } from 'quasar';
import { useCurrentAuthUserStore } from '@/stores';
import { Page } from '@/enums';

useMeta({
  title: 'Авторизация',
});

const state = reactive({
  disableSubmit: false,
});

const currentAuthUser = useCurrentAuthUserStore();
const router = useRouter();

const onError = (message = 'Неудачная попытка входа') => {
  alert(message);
};

const onSuccess = (response) => {
  if (!response.access_token) {
    onError();
    return;
  }

  state.disableSubmit = true;
  currentAuthUser.setAccessToken(response.access_token);
  // TODO: Добавить установку куки доступа
  router.push({ name: Page.HOME });
};
</script>

<template lang="pug">
.login
  .login__logo
    ImageAppLogo
  FormLogin.login__form(
    @success='onSuccess',
    @error='onError',
    :disable-submit='state.disableSubmit'
  )
  .login__help-row
    //.login__recovery-password.login__text Забыли пароль?
    //router-link.login__link.login__text(:to='{ name: "registration" }') Нет аккаунта?
</template>

<style scoped lang="scss">
.login {
  &__logo {
    @apply text-center mb-40px;
  }

  &__help-row {
    @apply flex-c-b mt-30px;
  }

  &__text {
    @apply text-white text-14px;
  }

  &__link {
    @apply no-underline;
  }
}
</style>

<route lang="yml">
{ meta: { layout: auth } }
</route>
