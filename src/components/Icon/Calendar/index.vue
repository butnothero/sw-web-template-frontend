<script setup lang="ts">
import icon from '@/assets/svg/calendar.svg';
import { getClassMods } from '@/helpers';

const props = defineProps({
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  size: {
    type: String,
    default: 'auto',
  },
});
</script>

<template lang="pug">
Icon.icon-calendar(:src='icon', alt='Календарь', :size='size', :class-mods='classMods')
</template>

<style scoped lang="scss">
.icon {
}
</style>
