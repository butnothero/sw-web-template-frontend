<script lang="ts">
export default defineComponent({
  name: 'DefaultLayout',
});
</script>

<script setup lang="ts">
</script>

<template lang="pug">
q-layout.g-layout.layout-default
  .layout-default__view
    router-view
</template>

<style scoped lang="scss">
.layout-default {
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
