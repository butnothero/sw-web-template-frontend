<script setup lang="ts">
const props = defineProps({
  modelValue: {},
  value: {},
  label: {
    default: '',
  },
  labelLeft: {
    default: '',
  },
});

const emit = defineEmits(['update:modelValue']);

const state = reactive({
  value: useVModel(props, 'modelValue'),
});
</script>

<template lang="pug">
label.input-radio
  .input-radio__label.input-radio__label--left(v-if='labelLeft') {{ labelLeft }}
  input.input-radio__input(
    type='radio',
    v-model='state.value',
    :value='value',
    :checked='state.value === value'
  )
  .input-radio__label(v-if='label') {{ label }}
</template>

<style scoped lang="scss">
.input-radio {
  @apply flex-c gap-8px cursor-pointer select-none;

  &__label {
    @apply text-accent text-14px;
  }

  &__input {
    @apply appearance-none m-0 relative w-16px h-16px cursor-pointer rounded-full border-1px border-primary;

    &::before {
      @apply content-[''] absolute-c-c w-1/2 h-1/2 rounded-full bg-accent transition-transform transform scale-0;
    }

    &:checked::before {
      @apply scale-120;
    }
  }
}
</style>
