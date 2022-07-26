<script setup lang="ts">
import { createToast } from '@/components/Toast/lib';
import { useDevice } from '@/composables';

const props = defineProps({
  mode: {
    type: String,
    default: '',
  },
  clipboard: {
    type: String,
    default: '',
  },
  iconSize: {
    type: String,
    default: '',
  },
  classMods: {
    type: String,
    default: 'white',
  },
});

const state = reactive({});

const { copyToClipboard } = useDevice();

const onClick = async () => {
  const { mode, clipboard } = props;

  if (mode === 'clipboard') {
    createToast('Ссылка скопирована в буфер обмена', { type: 'success', position: 'top-center' });
    await copyToClipboard(clipboard);
  }
};
</script>

<template lang="pug">
button.btn-resend(@click.prevent='onClick')
  ImageResend.btn-resend__icon(:size='iconSize', :class-mods='classMods')
</template>

<style scoped lang="scss">
.btn-resend {
  @apply btn-reset;
}
</style>
