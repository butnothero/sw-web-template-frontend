<script setup lang="ts">
import { getClassMods, getIconClassMods } from '@/services';

const props = defineProps({
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  iconSize: {
    type: String,
    default: '30px',
  },
});
</script>

<template lang="pug">
button.btn-calendar(:class='getClassMods("btn-calendar", classMods)')
  IconCalendar(:class-mods='getIconClassMods(classMods)', :size='iconSize')
</template>

<style scoped lang="scss">
.btn-calendar {
  @apply btn-only-icon;
}
</style>
