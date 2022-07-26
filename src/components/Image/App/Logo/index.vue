<script setup lang="ts">
import icon from '@/assets/svg/app/logo.svg';

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
Image.image-app-logo(:src='icon', alt='QRme', :class-mods='classMods', :size='size')
</template>
