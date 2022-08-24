<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  textSize: {
    type: String,
    default: '24px',
  },
});

const state = reactive({});
</script>

<template lang="pug">
.header-title(v-if='title') {{ title }}
</template>

<style scoped lang="scss">
.header-title {
  @apply text-primary;

  font-size: v-bind('textSize');
}
</style>
