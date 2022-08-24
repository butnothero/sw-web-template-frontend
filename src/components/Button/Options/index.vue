<script setup lang="ts">
import type { IconProps } from '@/interfaces';

const props = defineProps({
  iconProps: {
    type: Object as () => IconProps,
    default: undefined,
  },
});

const state = reactive({});
</script>

<template lang="pug">
.btn-options
  IconOptions(v-bind='iconProps')
</template>

<style scoped lang="scss">
.btn-options {
  @apply btn-only-icon;
}
</style>
