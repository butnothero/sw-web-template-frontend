<script setup lang="ts">
import icon from '@/assets/svg/navbar/active/home.gif';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-home-active(:src='icon', alt='Home')
</template>
