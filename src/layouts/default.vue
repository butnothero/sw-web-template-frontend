<script lang="ts">
export default defineComponent({
  name: 'defaultLayout',
});
</script>

<script setup lang="ts">
onMounted(() => {
  console.warn('Default layout');
});
</script>

<template lang="pug">
.layout.default-layout
  h1.default-layout__title Default layout
  main.default-layout__main
    router-view
</template>

<style scoped lang="scss">
.default-layout {
  &__title {
    @apply ml-10px text-26px text-blue-400;
  }
}
</style>
