<script lang="ts">
export default defineComponent({
  name: 'ErrorLayout',
});
</script>

<script setup lang="ts"></script>

<template lang="pug">
q-layout.g-layout.error-layout
  .error-layout__view
    router-view(v-slot='{ Component }')
      component(:is='Component')
</template>

<style scoped lang="scss">
.error-layout {
}
</style>
