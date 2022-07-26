<script setup lang="ts">
import { createToast } from '@/components/Toast/lib';

const state = reactive({});

const report = async () => {
  createToast('Жалоба успешно отправлена', {
    type: 'success',
    timeout: 4000,
    position: 'top-center',
  });
};
</script>

<template lang="pug">
Dropdown
  ButtonDotsY
  template(#dropdown)
    DropdownItem(@click='report') Пожаловаться
</template>

<style scoped lang="scss">
.component {
}
</style>
