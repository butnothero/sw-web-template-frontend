<script setup lang="ts">
import { useMeta } from 'quasar';
import { Page } from '@/enums';
import { useTokenStore } from '@/stores';

useMeta({
  title: 'Авторизация',
});

const route = useRoute();

const tokenStore = useTokenStore();

const checkForce = async () => {
  if (route.query.force !== 'null' && route.query.force !== null) {
    // Выход пользователя из системы
    // await apiAuth.logout();
    tokenStore.setAccessToken();
  }
};

onBeforeMount(async () => {
  await checkForce();
});
</script>

<template lang="pug">
.login
  h1.login__title Страница авторизации
  router-link(:to='{ name: Page.HOME }') На главную
</template>

<style scoped lang="scss">
.login {
  @apply bg-body;
}
</style>
