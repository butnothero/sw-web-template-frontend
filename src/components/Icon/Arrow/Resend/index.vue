<script setup lang="ts">
import icon from '@/assets/svg/resend.svg';
import type { IconProps } from '@/interfaces';

interface _Props extends IconProps {}

const props = defineProps<_Props>();
</script>

<template lang="pug">
Icon.icon-resend(:src='icon', alt='resend', v-bind='props')
</template>

<style scoped lang="scss">
.icon-resend {
}
</style>
