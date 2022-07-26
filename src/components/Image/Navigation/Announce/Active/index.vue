<script setup lang="ts">
import icon from '@/assets/svg/navbar/active/announce.gif';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-announce(:src='icon', alt='announce')
</template>
