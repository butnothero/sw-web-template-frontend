<script setup lang="ts">
import type { IconProps } from '@/interfaces';

const props = defineProps({
  iconProps: {
    type: Object as () => IconProps,
  },
});

const state = reactive({});
</script>

<template lang="pug">
button.btn-cross
  IconCross(size='16px', v-bind='iconProps')
</template>

<style scoped lang="scss">
.btn-cross {
  @apply btn-only-icon;
}
</style>
