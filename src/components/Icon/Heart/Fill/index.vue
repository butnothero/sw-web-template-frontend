<script setup lang="ts">
import icon from '@/assets/svg/heart-fill.svg';
import type { IconProps } from '@/interfaces';

interface _Props extends IconProps {}

const props = defineProps<_Props>();
</script>

<template lang="pug">
Icon.icon-heart-fill(:src='icon', alt='like', v-bind='props')
</template>

<style scoped lang="scss">
.icon-heart-fill {
}
</style>
