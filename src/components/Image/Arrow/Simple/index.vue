<script setup lang="ts">
import icon from '@/assets/svg/arrow-simple.svg';

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
Image.image-arrow-simple(:src='icon', alt='arrow', :class-mods='classMods', :size='size')
</template>
