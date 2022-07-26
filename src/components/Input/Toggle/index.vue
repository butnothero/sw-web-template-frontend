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
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
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
label.input-toggle
  input.input-toggle__input(
    type='checkbox',
    v-model='state.value',
    :required='required',
    :disabled='disabled'
  )
  .input-toggle__track
    .input-toggle__indicator
      .input-toggle__check-mark
        svg(viewBox='0 0 24 24', role='presentation', aria-hidden='true')
          path(
            d='M9.86 18a1 1 0 01-.73-.32l-4.86-5.17a1.001 1.001 0 011.46-1.37l4.12 4.39 8.41-9.2a1 1 0 111.48 1.34l-9.14 10a1 1 0 01-.73.33h-.01z'
          )
  .input-toggle__label(v-if='label') {{ label }}
</template>

<style scoped lang="scss">
.input-toggle {
  @apply cursor-pointer;

  $toggle-indicator-size: 24px; // changing this number will resize the whole toggle
  $track-height: $toggle-indicator-size + 6;
  $track-width: $toggle-indicator-size * 2.5;
  $highContrastModeSupport: solid 2px transparent;

  $speed: 0.2s;

  $dark: blue;

  $focus-ring: 0px 0px 0px 2px var(--color-global-accent-secondary);

  align-items: center;
  border-radius: 100px;
  display: flex;
  font-weight: 700;

  &__input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;

    // This style sets the focus ring. The ":not([disabled])" prevents the focus ring from creating a flash when the element is clicked.
    &:not([disabled]):active + .input-toggle__track,
    &:not([disabled]):focus + .input-toggle__track {
      border: 1px solid transparent;
      box-shadow: $focus-ring;
    }

    &:disabled + .input-toggle__track {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  &__track {
    @apply flex mr-12px relative bg-primary border border-primary-light rounded-full;

    height: $track-height;
    width: $track-width;
    min-width: $track-width;
    transition: background-color ease-in-out $speed;
  }

  &__indicator {
    @apply bg-primary-lighten;
    align-items: center;
    border-radius: $toggle-indicator-size;
    bottom: 2px;
    display: flex;
    height: $toggle-indicator-size;
    justify-content: center;
    left: 2px;
    outline: $highContrastModeSupport;
    position: absolute;
    transition: $speed;
    width: $toggle-indicator-size;
  }

  &__check-mark {
    fill: #000;
    //filter: var(--color-icon);
    height: $toggle-indicator-size - 4;
    width: $toggle-indicator-size - 4;
    opacity: 0;
    transition: opacity $speed ease-in-out;
  }

  &__label {
    @apply text-primary font-400 text-15px;
  }

  .input-toggle__input:checked + .input-toggle__track .input-toggle__indicator {
    @apply bg-white;
    transform: translateX($track-width - $track-height);

    .input-toggle__check-mark {
      opacity: 1;
      transition: opacity $speed ease-in-out;
    }
  }

  .input-toggle__input:checked + .input-toggle__track {
    @apply bg-accent;
  }
}
</style>
