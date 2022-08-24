<script setup lang="ts">
import iconEye from '@/assets/svg/eye.svg';

const props = defineProps({
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});
</script>

<template lang="pug">
Icon.icon-eye(:src='iconEye', alt='show', :class-mods='classMods')
</template>
