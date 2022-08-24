<script setup lang="ts">
import type { IconProps } from '@/interfaces';

const props = defineProps({
  iconProps: {
    type: Object as () => IconProps,
    default: undefined,
  },
});
</script>

<template lang="pug">
.btn-notifications
  IconNotifications(v-bind='iconProps')
</template>

<style scoped lang="scss">
.btn-notifications {
  @apply btn-only-icon;
}
</style>
