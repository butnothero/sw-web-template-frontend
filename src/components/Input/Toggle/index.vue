<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: [Boolean, Number],
    required: true,
  },
  labelLeft: {
    default: '',
  },
  label: {
    default: '',
  },
  required: {
    default: false,
  },
  disabled: {
    default: false,
  },
});

const emit = defineEmits(['update:modelValue', 'change']);

const state = reactive({
  value: useVModel(props, 'modelValue'),
});

watch(
  () => state.value,
  (value) => {
    emit('change', value);
  },
);
</script>

<template lang="pug">
label.input-toggle(:class='{ "input-toggle--active": modelValue }')
  .input-toggle__label.input-toggle__label--left(v-if='labelLeft') {{ labelLeft }}
  input.input-toggle__input(
    type='checkbox',
    v-model='state.value',
    :required='required',
    :disabled='disabled'
  )
  .input-toggle__track
    .input-toggle__thumb
  .input-toggle__label(v-if='label') {{ label }}
</template>

<style scoped lang="scss">
.input-toggle {
  $_block: &;

  @apply text-secondary-interactive text-14px flex-c gap-12px;

  &__input {
    @apply hidden;
  }

  &__track {
    @apply relative bg-white rounded-16px w-48px h-26px transition-all border border-solid border-primary;
  }

  &__thumb {
    @apply absolute-y-c w-20px h-20px left-2px bg-accent rounded-full transition-all;
  }

  &--active {
    #{$_block} {
      &__track {
        @apply bg-accent;
      }

      &__thumb {
        @apply left-24px bg-white;
      }
    }
  }
}
</style>
