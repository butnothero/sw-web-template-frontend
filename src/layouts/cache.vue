<script lang="ts">
export default defineComponent({
  name: 'cache',
});
</script>

<script setup lang="ts">
onMounted(() => {
  console.warn('Cache layout');
});
</script>

<template lang="pug">
.layout.default-layout
  main.default-layout__main
    router-view(v-slot='{ Component, route }')
      transition(:name='route.meta.transition || "fade"', mode='out-in')
        keep-alive
          component(:is='Component', :key='route.fullPath')
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
