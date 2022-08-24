<script setup lang="ts">
import icon from '@/assets/svg/calendar-2.svg';
import type { IconProps } from '@/interfaces';

interface _Props extends IconProps {}

const props = defineProps<_Props>();

const state = reactive({});
</script>

<template lang="pug">
Icon.icon-calendar-2(:src='icon', v-bind='props')
</template>

<style scoped lang="scss">
.component {
}
</style>
