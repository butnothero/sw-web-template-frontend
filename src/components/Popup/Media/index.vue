<script setup lang="ts">
import { toggleBodyScroll } from '@/services';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'media',
  },
  scrollBodyAfterClose: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['close', 'update:modelValue']);

const isActive = useVModel(props, 'modelValue', emit);

const state = reactive({});

const close = () => {
  emit('close');
  isActive.value = false;
};

const watchHook = () => {
  if (props.modelValue) {
    toggleBodyScroll('add');
  } else {
    if (props.scrollBodyAfterClose) {
      toggleBodyScroll('remove');
    }
  }
};

watch(
  () => props.modelValue,
  () => {
    watchHook();
  },
);

onBeforeUnmount(() => {
  isActive.value = false;
  toggleBodyScroll('remove');
});
</script>

<template lang="pug">
transition(name='fade', mode='out-in')
  .popup-media(v-if='isActive', role='dialog', aria-modal='true')
    button.popup-media__close(@click.prevent='close') Закрыть
    .popup-media__container
      .popup-media__img-container
        Image(:src='src', :alt='alt', fit='contain')
</template>

<style scoped lang="scss">
.popup-media {
  @apply fixed top-0 left-0 w-100vw h-100vh z-999 overflow-hidden bg-black;

  &__close {
    @apply reset-btn absolute top-0 right-0 p-30px text-gray-200 text-14px z-99;
  }

  &__container {
    @apply relative h-full;
  }

  &__img-container {
    @apply absolute-c-c w-full h-full;
  }
}
</style>
