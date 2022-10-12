<script lang="ts">
export default defineComponent({
  name: 'home',
});
</script>

<script setup lang="ts">
import { useMeta } from 'quasar';

useMeta({
  title: 'Главная страница',
});
</script>

<template lang="pug">
.page-home
  Header(title='Header title')
  q-page-container.page-home__container
    q-page
      h1 Hello world
</template>

<style scoped lang="scss">
.page-home {
}
</style>

<route lang="yaml">
name: home
meta:
  pageKey: home
</route>
