<script setup lang="ts">
import icon from '@/assets/svg/navbar/messenger.svg';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-messenger(:src='icon', alt='Анонсы', :class='[{ "image-messenger--active": active }]')
</template>

<style scoped lang="scss">
.image-messenger {
  filter: $color-nav-icon-messenger;

  &--active {
    @include animate-nav-icon();
  }
}
</style>
