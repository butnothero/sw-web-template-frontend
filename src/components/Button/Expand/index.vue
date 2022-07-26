<script setup lang="ts">
const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({});
</script>

<template lang="pug">
button.btn-expand
  .btn-expand__text {{ open ? 'Скрыть' : 'Показать больше' }}
  ImageArrowSimple(:class='[{ "btn-expand__icon--rotate": open }]', class-mods='purple')
</template>

<style scoped lang="scss">
.btn-expand {
  @apply flex-c py-8px px-16px bg-white rounded-8px border-none;

  &__text {
    @apply text-[#5D2ED5] text-14px mr-8px;
  }

  &__icon {
    &--rotate {
      @apply transform rotate-180;
    }
  }
}
</style>
