<script setup lang="ts">
import icon from '@/assets/svg/navbar/home.svg';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-home(:src='icon', alt='Главная', :class='[{ "image-home--active": active }]')
</template>

<style scoped lang="scss">
.image-home {
  filter: $color-nav-icon-home;

  &--active {
    @include animate-nav-icon();
  }
}
</style>
