<script setup lang="ts">
import icon from '@/assets/svg/resend.svg';
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
Image.image-resend(
  :src='icon',
  alt='resend',
  :class='getClassMods("image-resend--", classMods)',
  :size='size'
)
</template>

<style scoped lang="scss">
.image-resend {
  &--white {
    filter: var(--color-nav-icon-profile);
  }
}
</style>
