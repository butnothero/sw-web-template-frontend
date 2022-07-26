<script setup lang="ts">
import icon from '@/assets/svg/calendar.svg';
import { getClassMods } from '@/services';

const props = defineProps({
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});
</script>

<template lang="pug">
Image.image-calendar(
  :src='icon',
  alt='Календарь',
  :class='getClassMods("image-calendar", classMods)'
)
</template>

<style scoped lang="scss">
.image-calendar {
  filter: $color-icon-to-green;
}
</style>
