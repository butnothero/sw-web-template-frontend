<script setup lang="ts">
const isShow = ref<boolean>(false);

onMounted(() => {
  isShow.value = true;
});
</script>

<template lang="pug">
.client-only(v-if='isShow')
  slot
</template>

<style scoped lang="scss"></style>
