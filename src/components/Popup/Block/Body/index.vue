<script setup lang="ts">
const state = reactive({});
</script>

<template lang="pug">
.popup-block-body
  slot
</template>

<style scoped lang="scss">
.popup-block-body {
  @apply pt-40px;
}
</style>
