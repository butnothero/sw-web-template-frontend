<script setup lang="ts">
import icon from '@/assets/svg/search.svg';
import type { IconProps } from '@/interfaces';

interface _Props extends IconProps {}

const props = defineProps<_Props>();

const state = reactive({});
</script>

<template lang="pug">
Icon.icon-search(:src='icon', v-bind='props')
</template>

<style scoped lang="scss">
.component {
}
</style>
