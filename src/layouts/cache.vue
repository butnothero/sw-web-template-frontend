<script lang="ts">
export default defineComponent({
  name: 'cacheLayout',
});
</script>

<script setup lang="ts">
onMounted(() => {
  console.log('Cache layout');
});
</script>

<template lang="pug">
.layout.default-layout
  main.default-layout__main
    router-view(v-slot='{ Component, route }')
      keep-alive
        component(:is='Component', :key='route.fullPath')
</template>
