<script setup lang="ts">
import { toggleBodyScroll } from '@/services';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  showOverlay: {
    type: Boolean,
    default: true,
  },
  showCross: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
  maxWidth: {
    type: String,
    default: '800px',
  },
  scrollBodyAfterClose: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['close', 'update:modelValue']);

const isActive = useVModel(props, 'modelValue', emit);

const closePopup = () => {
  emit('close');
  isActive.value = false;
};

const preventEvent = (e) => {
  e.stopPropagation();
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
  ClientOnly.popup(v-if='isActive', role='dialog', aria-modal='true', @click='closePopup')
    .popup__container(@click='preventEvent', :style='[{ "max-width": maxWidth }]')
      PopupBlockHeader(@cose='closePopup', :title='title', :show-cross='showCross')
        slot(name='header')
      PopupBlockBody
        slot
      PopupBlockFooter
        slot(name='footer')
</template>

<style scoped lang="scss">
.popup {
  //@include scrollbar();

  @apply fixed flex-c-c bg-black/70 top-0 left-0 w-full h-full z-9999 overflow-y-auto overflow-x-hidden;

  &__container {
    //@include scrollbar();
    @apply bg-dark-blue border border-primary rounded p-15px max-h-[80%] min-w-300px overflow-auto;
    width: calc(100% - 10px);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
