<script setup lang="ts">
import icon from '@/assets/svg/navbar/top.svg';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-top(:src='icon', alt='Топ', :class='[{ "image-top--active": active }]')
</template>

<style scoped lang="scss">
.image-top {
  filter: $color-nav-icon-top;

  &--active {
    @include animate-nav-icon();
  }
}
</style>
