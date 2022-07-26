<script setup lang="ts">
import { getClassMods } from '@/services';

const props = defineProps({
  src: {
    type: String,
    default: '',
    required: true,
  },
  alt: {
    type: String,
    default: 'image',
    required: true,
  },
  size: {
    type: String,
    default: '',
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});
</script>

<template lang="pug">
q-img.image(
  :src='src',
  :alt='alt',
  :style='[{ width: size }, { height: size }]',
  :class='getClassMods("image", classMods)',
  loading='lazy'
)
  slot
</template>

<style scoped lang="scss">
.image {
}
</style>
