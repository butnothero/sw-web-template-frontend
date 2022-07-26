<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const state = reactive({
  value: useVModel(props, 'modelValue'),
});
</script>

<template lang="pug">
label.input-checkbox
  input.input-checkbox__input(v-model='state.value', type='checkbox')
  .input-checkbox__label(v-if='label') {{ label }}
</template>

<style scoped lang="scss">
.input-checkbox {
  @apply flex-c cursor-pointer;

  &__label {
    @apply text-primary text-15px ml-8px select-none;
  }

  &__input {
    @apply appearance-none bg-transparent m-0 border border-primary-light rounded-4px cursor-pointer;

    $_size: 1.4em;

    width: $_size;
    height: $_size;

    &::before {
      @apply content-[''] origin-center;

      $_size-before: 0.8em;

      width: $_size-before;
      height: $_size-before;
      box-shadow: inset 1em 1em var(--color-global-accent-secondary);
      transform: scale(0);
      transition: 70ms transform ease-in-out;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    &:checked {
      @apply grid place-content-center;

      &::before {
        transform: scale(1);
      }
    }

    &:focus {
      outline: max(2px, 0.15em) solid var(--color-global-accent);
      outline-offset: max(2px, 0.15em);
    }

    &:disabled {
      color: gray;
      cursor: not-allowed;
    }
  }
}
</style>
