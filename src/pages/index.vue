<script setup lang="ts">
import { useMeta } from 'quasar';

useMeta({
  title: 'Главная страница',
});
</script>

<template lang="pug">
.home
  .home__container
    h1 Привет :)
</template>

<style scoped lang="scss">
.home {
}
</style>

<route lang="yml">
{ name: home }
</route>
