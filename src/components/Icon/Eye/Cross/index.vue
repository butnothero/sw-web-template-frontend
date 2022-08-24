<script setup lang="ts">
import iconEyeCross from '@/assets/svg/eye-cross.svg';

const props = defineProps({
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});
</script>

<template lang="pug">
Icon.icon-eye-cross(:src='iconEyeCross', alt='hide', :class-mods='classMods')
</template>
