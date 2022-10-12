<script setup lang="ts">
// TODO: Добавить поддержку слотов
// Пример: https://www.npmjs.com/package/vue-load-image
import { getClassMods } from '@butnothero/tools';

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'icon',
  },
  size: {
    type: String,
    default: '',
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  rotate: {
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
  @apply transition-transform select-none;

  transform: rotate(v-bind('rotate'));

  filter: $color-icon-primary;

  &--white {
    filter: $color-icon-white;
  }

  &--black {
    filter: $color-icon-black;
  }

  &--purple {
    filter: $color-icon-purple;
  }

  &--red {
    filter: $color-icon-red;
  }

  &--green {
    filter: $color-icon-green;
  }

  &--pink {
    filter: $color-icon-pink;
  }

  &--light-blue {
    filter: $color-icon-light-blue;
  }
}
</style>
