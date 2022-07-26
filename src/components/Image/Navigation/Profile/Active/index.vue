<script setup lang="ts">
import icon from '@/assets/svg/navbar/active/profile.gif';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-profile-active(:src='icon', alt='Profile')
</template>
