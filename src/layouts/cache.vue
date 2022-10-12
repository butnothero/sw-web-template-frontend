<script lang="ts">
export default defineComponent({
  name: 'CacheLayout',
});
</script>

<script setup lang="ts">
import { getRouteKey } from '@/helpers';

const props = defineProps({
  pageKey: {
    type: String,
    default: '',
    required: true,
  },
});
</script>

<template lang="pug">
q-layout.g-layout.layout-cache
  .layout-cache__view
    router-view(v-slot='{ Component, route }')
      keep-alive
        component(v-if='getRouteKey($route) === pageKey', :is='Component', :key='pageKey')
</template>

<style scoped lang="scss">
.layout-cache {
}
</style>
