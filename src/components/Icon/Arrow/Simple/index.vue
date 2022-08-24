<script setup lang="ts">
import icon from '@/assets/svg/arrow-simple.svg';
import type { IconProps } from '@/interfaces';

interface _Props extends IconProps {}

const props = defineProps<_Props>();
</script>

<template lang="pug">
Icon.image-arrow-simple(:src='icon', v-bind='props')
</template>
