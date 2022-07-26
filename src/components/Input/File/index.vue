<script setup lang="ts">
import { getClassMods } from '@/services';

const props = defineProps({
  preset: {
    type: String,
    default: '',
  },
  accept: {
    type: String,
    default: '',
  },
  classMods: {
    type: [Array as () => string[], String],
    default: '',
  },
});

const emit = defineEmits(['change']);

const state = reactive({
  acceptPresets: {
    img: 'image/jpeg, image/png, image/jpg',
  },
});

const getAccept = (): string => {
  if (props.preset === '') return props.accept;

  if (typeof state.acceptPresets[props.preset] !== 'undefined') {
    return state.acceptPresets[props.preset];
  }
  return '';
};

const onChange = (e) => {
  emit('change', e.target.files || e.dataTransfer.files);
};
</script>

<template lang="pug">
label.input-file(:class='getClassMods("input-file", classMods)')
  input.input-file__input(type='file', :accept='getAccept()', @change='onChange')
  .input-file__slot
    slot
</template>

<style scoped lang="scss">
.input-file {
  &__input {
    @apply hidden;
  }

  &--inner {
    @apply inline-block absolute w-full h-full left-0 top-0 cursor-pointer;
  }
}
</style>
