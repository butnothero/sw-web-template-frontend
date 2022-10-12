<script setup lang="ts">
import { getClassMods } from '@butnothero/tools';

const props = defineProps({
  reveal: {
    type: Boolean,
    default: true,
  },
  elevated: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});
</script>

<template lang="pug">
q-header.common-header.g-header(
  :class='getClassMods("common-header", classMods)',
  :reveal='reveal',
  :elevated='elevated'
)
  q-toolbar.common-header__toolbar
    slot
      HeaderMixinTitle(:title='title')
</template>

<style scoped lang="scss">
.common-header {
  &__toolbar {
    @apply box-px gap-10px;
  }

  &--simple {
    @apply bg-transparent border-none;
  }

  &--fixed {
    @apply fixed w-full;
  }
}
</style>
