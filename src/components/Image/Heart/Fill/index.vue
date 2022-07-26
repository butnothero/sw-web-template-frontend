<script setup lang="ts">
import icon from '@/assets/svg/heart-fill.svg';
import { getClassMods } from '@/services';

const props = defineProps({
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  size: {
    type: String,
    default: '',
  },
});
</script>

<template lang="pug">
Image.image-heart-fill(
  :src='icon',
  alt='like',
  :class='getClassMods("image-heart-fill--", classMods)',
  :style='`width: ${size}; height: ${size}`'
)
</template>

<style scoped lang="scss">
.image-heart-fill {
  &--white {
    filter: var(--color-nav-icon-profile);
  }

  &--red {
    filter: $color-icon-to-red;
  }
}
</style>
