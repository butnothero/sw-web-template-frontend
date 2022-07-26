<script setup lang="ts">
import { useMeta } from 'quasar';
import { Page } from '@/enums';

useMeta({
  title: 'Авторизация',
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
