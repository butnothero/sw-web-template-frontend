<script lang="ts">
export default defineComponent({
  name: '404',
});
</script>

<script setup lang="ts">
import { useMeta } from 'quasar';

useMeta({
  title: '404',
});
</script>

<template lang="pug">
.not-found
  .not-found__row.container-px
    h1.not-found__title 404
    h2.not-found__subtitle Такая страница не найдена :(
    router-link.not-found__link(:to='{ name: "home" }') На главную
</template>

<style lang="scss" scoped>
.not-found {
}
</style>

<route lang="yaml">
name: '404'
meta:
  layout: error
</route>
