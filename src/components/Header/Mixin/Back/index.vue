<script setup lang="ts">
import type { ButtonBackProps } from '@/interfaces';

interface _Props extends ButtonBackProps {}

const props = defineProps<_Props>();
</script>

<template lang="pug">
.header-mixin-back
  ButtonBack.header-mixin-back__btn(v-bind='props')
</template>

<style scoped lang="scss">
.header-mixin-back {
}
</style>
