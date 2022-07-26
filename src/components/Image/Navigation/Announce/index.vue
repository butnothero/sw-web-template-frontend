<script setup lang="ts">
import iconAnnounce from '@/assets/svg/navbar/announce.svg';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-announce(
  :src='iconAnnounce',
  alt='Анонсы',
  :class='[{ "image-announce--active": active }]'
)
</template>

<style scoped lang="scss">
.image-announce {
  filter: $color-nav-icon-announce;

  &--active {
    @include animate-nav-icon();
  }
}
</style>
