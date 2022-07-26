<script setup lang="ts">
import icon from '@/assets/svg/navbar/profile.svg';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-profile(:src='icon', alt='Профиль', :class='[{ "image-profile--active": active }]')
</template>

<style scoped lang="scss">
.image-profile {
  filter: $color-nav-icon-profile;

  &--active {
    @include animate-nav-icon();
  }
}
</style>
