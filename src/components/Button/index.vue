<script setup lang="ts">
import { getClassMods } from '@/services';

const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  disable: {
    type: Boolean,
    default: false,
  },
  textSize: {
    type: String,
    default: '16px',
  },
});
</script>

<template lang="pug">
button.btn(:class='[getClassMods("btn", classMods), { "btn--disable": disable }]') {{ text }}
</template>

<style scoped lang="scss">
.btn {
  @apply py-0.6rem px-20px border-2px border-solid border-purple bg-purple rounded-box cursor-pointer text-white font-bold;

  font-size: v-bind('textSize');

  &--full {
    @apply w-full;
  }

  &--disable {
    @apply bg-accent--disable pointer-events-none user-select-none;
  }

  &--only-border {
    @apply bg-transparent;
  }

  &--text-sm {
    @apply text-14px font-[400];
  }

  &--font-400 {
    @apply font-400;
  }

  &--w-full {
    @apply w-full;
  }

  &--bg-white {
    @apply bg-white text-black;
  }

  &--border-none {
    @apply border-none;
  }
}
</style>
