<script setup lang="ts">
import icon from '@/assets/svg/user.svg';
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
Image.image-user(
  :src='icon',
  alt='user',
  :class='getClassMods("image-user--", classMods)',
  :style='`width: ${size}; height: ${size}`'
)
</template>

<style scoped lang="scss">
.image-user {
  &--white {
    filter: $color-icon-to-white;
  }

  &--red {
    filter: $color-icon-to-red;
  }
}
</style>
