<script setup lang="ts">
onMounted(() => {
  console.warn('error layout');
});
</script>

<template lang="pug">
.layout.error-layout
  h1.error-layout__title Error layout
  main.error-layout__main
    router-view(v-slot='{ Component }')
      component(:is='Component')
</template>

<style scoped lang="scss">
.error-layout {
  &__title {
    @apply text-red-400;
  }
}
</style>
