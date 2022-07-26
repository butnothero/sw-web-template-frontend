<script setup lang="ts">
import icon from '@/assets/svg/planet.svg';
import { getClassMods } from '@/services';

const props = defineProps({
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});
</script>

<template lang="pug">
Image.image-planet(:src='icon', alt='Network', :class='getClassMods("image-planet--", classMods)')
</template>

<style scoped lang="scss">
.image-planet {
  filter: $color-icon-to-purple;
}
</style>
