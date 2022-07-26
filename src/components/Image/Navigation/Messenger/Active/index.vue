<script setup lang="ts">
import icon from '@/assets/svg/navbar/active/messenger.gif';

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template lang="pug">
Image.image-messenger-active(:src='icon', alt='Messenger')
</template>
