<script setup lang="ts">
import { getClassMods } from '@butnothero/tools';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'image',
  },
  size: {
    type: String,
    default: '100%',
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  loading: {
    type: String,
    default: 'lazy',
  },
  fit: {
    type: String,
    default: 'cover',
  },
});
</script>

<template lang="pug">
img.image(
  :src='src',
  :alt='alt',
  :style='[{ width: size }, { height: size }, { "object-fit": fit }]',
  :class='getClassMods("image", classMods)',
  :loading='loading'
)
</template>

<style scoped lang="scss">
.image {
  @apply select-none pointer-events-none;
}
</style>
