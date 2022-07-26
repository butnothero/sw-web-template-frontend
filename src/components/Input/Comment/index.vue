<script setup lang="ts">
import { usePopupDownloadAppStore } from '@/stores/popup/download/app';

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Напишите свое сообщение',
  },
});

const state = reactive({});

const downloadApp = usePopupDownloadAppStore();

const showDownloadApp = () => {
  downloadApp.setActive(true);
};
</script>

<template lang="pug">
.input-comment(@click='showDownloadApp')
  .input-comment__text(v-if='placeholder') {{ placeholder }}
</template>

<style scoped lang="scss">
.input-comment {
  @apply px-15px py-12px select-none rounded-10px border border-solid border-white bg-[#093343];

  &__text {
    @apply text-16px text-[#4E7382];
  }
}
</style>
