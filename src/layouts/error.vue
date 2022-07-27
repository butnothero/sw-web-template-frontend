<script lang="ts">
export default defineComponent({
  name: 'errorLayout',
});
</script>

<script setup lang="ts">
onMounted(() => {
  console.warn('Error layout');
});
</script>

<template lang="pug">
.layout.error-layout
  h1.error-layout__title Error layout
  main.error-layout__main
    router-view
</template>

<style scoped lang="scss">
.error-layout {
  &__title {
    @apply text-red-400;
  }
}
</style>
