<script setup lang="ts">
import { createToast } from '@/components/Toast/lib';
import { copyToClipboard } from 'quasar';
import type { IconProps } from '@/interfaces';

const props = defineProps({
  mode: {
    type: String,
    default: '',
  },
  clipboard: {
    type: String,
    default: '',
  },
  iconProps: {
    type: Object as () => IconProps,
    default: undefined,
  },
  useDownloadApp: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({});

const onClick = async () => {
  const { mode, clipboard, useDownloadApp } = props;

  if (mode === 'clipboard') {
    createToast('Ссылка скопирована в буфер обмена', { type: 'success', position: 'top-center' });
    await copyToClipboard(clipboard);
  }
};
</script>

<template lang="pug">
button.btn-resend(@click.prevent='onClick')
  IconArrowResend.btn-resend__icon(v-bind='iconProps')
</template>

<style scoped lang="scss">
.btn-resend {
  @apply btn-only-icon;
}
</style>
