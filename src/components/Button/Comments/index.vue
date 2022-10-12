<script setup lang="ts">
import type { IconProps } from '@/interfaces';
import { getClassMods } from '@butnothero/tools';

const props = defineProps({
  iconProps: {
    type: Object as () => IconProps,
  },
  count: {
    type: [String, Number],
    default: 0,
  },
  classMods: {
    type: [String, Array as () => string[]],
  },
});

const state = reactive({});
</script>

<template lang="pug">
button.btn-comments(:class='getClassMods("btn-comments", classMods)')
  IconComments(v-bind='iconProps')
  .btn-comments__count {{ count }}
</template>

<style scoped lang="scss">
.btn-comments {
  $_block: &;

  @apply btn-only-icon flex-c gap-10px;

  &__count {
    @apply text-primary text-12px;
  }

  &--vertical {
    @apply flex-c-c flex-col;
  }

  &--text-white {
    #{$_block} {
      &__count {
        @apply text-white;
      }
    }
  }
}
</style>
