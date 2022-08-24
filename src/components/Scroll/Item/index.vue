<script setup lang="ts">
const state = reactive({});
</script>

<template lang="pug">
.scroll-item
  slot
</template>

<style scoped lang="scss">
.scroll-item {
  @apply w-auto h-full relative;

  flex-shrink: 0;
  transition-property: transform;
}
</style>
