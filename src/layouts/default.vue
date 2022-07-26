<script setup lang="ts">
onMounted(() => {
  console.warn('Default layout');
});
</script>

<template lang="pug">
.layout.default-layout
  h1.default-layout__title Default layout
  main.default-layout__main
    router-view(v-slot='{ Component }')
      transition(name='fade', mode='out-in')
        component(:is='Component')
</template>

<style scoped lang="scss">
.default-layout {
  &__title {
    @apply ml-10px text-26px text-blue-400;
  }
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
