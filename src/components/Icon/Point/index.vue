<script setup lang="ts">
import icon from '@/assets/svg/point.svg';

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
Icon.image-point(:src='icon', alt='arrow', :class-mods='classMods', :size='size')
</template>
