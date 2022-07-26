<script setup lang="ts">
const state = reactive({});
</script>

<template lang="pug">
button.btn-dots-y
  ImageDotsY(class-mods='white')
</template>

<style scoped lang="scss">
.btn-dots-y {
  @apply btn-reset flex-c-c px-10px py-4px;
}
</style>
