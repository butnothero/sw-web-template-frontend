<script lang="ts" setup>
import { getRouteKey } from '@/services';
import { useAppTheme } from '@/composables';

// const appTheme = useAppTheme();

// appTheme.init();
</script>

<template lang="pug">
.app
  .app__view
    router-view(v-slot='{ Component, route }')
      keep-alive(:include='["CacheLayout"]')
        component(:is='Component', :key='Component.type?.name', :pageKey='getRouteKey(route)')
</template>

<style scoped lang="scss">
.app {
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
