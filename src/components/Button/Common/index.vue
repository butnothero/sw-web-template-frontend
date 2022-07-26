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
});
</script>

<template lang="pug">
button.button(:class='[getClassMods("button", classMods), { "button--disable": disable }]') {{ text }}
</template>

<style scoped lang="scss">
.button {
  @apply bg-accent border-2px border-solid border-accent rounded-box cursor-pointer text-16px font-bold py-12px px-20px text-white;

  &--full {
    @apply w-full;
  }

  &--disable {
    @apply bg-accent--disable;
  }

  &--only-border {
    @apply bg-transparent;
  }

  &--text-sm {
    @apply text-14px font-[400];
  }

  &--w-full {
    @apply w-full;
  }
}
</style>
