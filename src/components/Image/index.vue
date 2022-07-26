<script setup lang="ts">
// TODO: Добавить поддержку слотов
// Пример: https://www.npmjs.com/package/vue-load-image
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
    type: [String, Array],
    default: '',
  },
});
</script>

<template lang="pug">
img.image(
  :src='src',
  :alt='alt',
  :style='[{ width: size }, { height: size }]',
  :class='getClassMods("image", classMods)',
  loading='lazy'
)
</template>

<style scoped lang="scss">
.image {
  &--white {
    filter: $color-icon-to-white;
  }

  &--purple {
    filter: invert(22%) sepia(50%) saturate(4935%) hue-rotate(252deg) brightness(83%) contrast(102%);
  }

  &--sky {
    filter: invert(49%) sepia(69%) saturate(573%) hue-rotate(169deg) brightness(87%) contrast(91%);
  }
}
</style>
