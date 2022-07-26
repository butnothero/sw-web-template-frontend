<script setup lang="ts">
import icon from '@/assets/svg/navbar/active/qr.gif';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-top-active(:src='icon', alt='Top')
</template>
