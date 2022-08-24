<script setup lang="ts">
import icon from '@/assets/svg/sound-off.svg';
import type { IconProps } from '@/interfaces';

interface _Props extends IconProps {}

const props = defineProps<_Props>();
</script>

<template lang="pug">
Icon.icon-sound-off(:src='icon', v-bind='props')
</template>

<style scoped lang="scss">
.component {
}
</style>
