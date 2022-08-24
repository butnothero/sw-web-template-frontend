<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  showCross: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['close']);

const onClose = () => {
  emit('close');
};
</script>

<template lang="pug">
.popup-block-header
  .popup-block-header__slot-container
    .popup-block-header__title(v-if='title') {{ title }}
    slot
  button.popup-block-header__cross(v-if='showCross', @click='onClose') X
</template>

<style scoped lang="scss">
.popup-block-header {
  @apply relative;

  &__cross {
    @apply absolute right-0 top-0 cursor-pointer rounded-box p-5px;
  }

  &__slot-container {
    @apply mr-45px text-break;
  }

  &__title {
    @apply text-primary text-18px leading-6 text-break select-none;
  }

  @include respond-to(lg) {
    &__cross {
      @apply hover:(bg-primary-darken);
    }
  }
}
</style>
