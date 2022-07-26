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
    default: 'icon',
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
img.icon(
  :src='src',
  :alt='alt',
  :style='[{ width: size }, { height: size }]',
  :class='getClassMods("icon", classMods)',
  loading='lazy'
)
</template>

<style scoped lang="scss">
.icon {
  &--white {
    filter: $color-icon-to-white;
  }

  &--purple {
    filter: $color-icon-to-purple;
  }
}
</style>
