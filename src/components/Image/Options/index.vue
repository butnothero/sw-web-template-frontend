<script setup lang="ts">
import icon from '@/assets/svg/options.svg';
import { getClassMods } from '@/services';

const props = defineProps({
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});
</script>

<template lang="pug">
Image.image-options(
  :src='icon',
  alt='Настройки',
  :class='getClassMods("image-options--", classMods)'
)
</template>

<style scoped lang="scss">
.image-options {
  &--white {
    filter: var(--color-nav-icon-profile);
  }
}
</style>
