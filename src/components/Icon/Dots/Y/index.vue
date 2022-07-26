<script setup lang="ts">
import icon from '@/assets/svg/dots-y.svg';
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
Icon.icon-dots-y(
  :src='icon',
  alt='action',
  :class='getClassMods("icon-dots-y", classMods)',
  :style='`width: ${size}; height: ${size}`'
)
</template>

<style scoped lang="scss">
.icon-dots-y {
  &--white {
    filter: $color-icon-to-white;
  }
}
</style>
