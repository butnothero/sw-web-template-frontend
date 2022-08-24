<script setup lang="ts">
import { getClassMods } from '@/services';

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});

const state = reactive({});
</script>

<template lang="pug">
button.btn-expand(:class='getClassMods("btn-expand", classMods)')
  .btn-expand__text {{ open ? 'Скрыть' : 'Показать больше' }}
  IconArrowSimple(
    :class='[{ "btn-expand__icon--rotate": open }]',
    class-mods='purple',
    size='14px'
  )
</template>

<style scoped lang="scss">
.btn-expand {
  $_block: &;

  @apply flex-c py-8px px-16px bg-white rounded-8px border-none;

  &__text {
    @apply text-[#5D2ED5] text-14px mr-8px;
  }

  &__icon {
    &--rotate {
      @apply transform rotate-180;
    }
  }

  &--bg-transparent {
    @apply bg-transparent;
  }

  &--font-700 {
    #{$_block} {
      &__text {
        @apply font-700;
      }
    }
  }

  &--p-0 {
    @apply p-0;
  }
}
</style>
