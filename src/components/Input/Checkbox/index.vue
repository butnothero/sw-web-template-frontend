<script setup lang="ts">
import { getClassMods } from '@/services';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const _model = useVModel(props, 'modelValue');
</script>

<template lang="pug">
.input-checkbox(:class='getClassMods("input-checkbox", classMods)')
  label.input-checkbox__label
    input.input-checkbox__input(type='checkbox', v-model='_model')
    .input-checkbox__text(v-if='text') {{ text }}
</template>

<style scoped lang="scss">
.input-checkbox {
  $_block: &;

  &__label {
    @apply flex-c;
  }

  &__input {
    @apply appearance-none bg-transparent m-0 border-2px border-white border-solid rounded-2px;

    $_size: 1.25em;

    width: $_size;
    height: $_size;

    &::before {
      @apply content-[''] origin-center;

      $_size-before: 0.65em;

      width: $_size-before;
      height: $_size-before;
      box-shadow: inset 1em 1em #f107f1;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked {
      @apply grid place-content-center;

      &::before {
        transform: scale(1);
      }
    }
  }

  &__text {
    @apply text-16px text-white ml-10px;
  }

  &--error {
    #{$_block} {
      &__text {
        @apply text-danger;
      }
    }
  }

  &--inline-block {
    @apply inline-block;
  }
}
</style>
