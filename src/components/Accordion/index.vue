<script setup lang="ts">
import type { IconProps } from '@/interfaces';
import { getClassMods } from '@/services';

const props = defineProps({
  caption: {
    default: '',
  },
  iconArrowProps: {
    type: Object as () => IconProps,
  },
  classMods: {
    type: [String, Array as () => string[]],
  },
});

const emit = defineEmits(['toggle']);

const state = reactive({
  isOpen: false,
});

const toggleOpen = () => {
  state.isOpen = !state.isOpen;
  emit('toggle', state.isOpen);
};
</script>

<template lang="pug">
.accordion(:class='getClassMods("accordion", classMods)')
  .accordion__row(@click='toggleOpen')
    .accordion__row-left
      slot(name='icon')
      .accordion__caption-wrap
        .accordion__caption {{ caption }}
    .accordion__arrow-wrap
      IconArrowSimple.accordion__arrow(
        :class='[{ "accordion__arrow--open": state.isOpen }]',
        size='12px',
        v-bind='iconArrowProps'
      )
  .accordion__content(v-show='state.isOpen')
    slot
</template>

<style scoped lang="scss">
.accordion {
  $_block: &;

  @apply cursor-pointer;

  &__row {
    @apply flex-c-b gap-10px py-20px;
  }

  &__row-left {
    @apply flex-c gap-10px;
  }

  &__caption {
    @apply text-primary text-14px;
  }

  &__arrow {
    @apply transition-all duration-200 transform;

    &--open {
      @apply rotate-180;
    }
  }
}
</style>
