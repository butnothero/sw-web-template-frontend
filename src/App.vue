<template lang="pug">
router-view(v-slot='{ Component, route }')
  transition(:name='route.meta.transition || "fade"', mode='out-in')
    keep-alive(:include='["cacheLayout"]')
      component(:is='Component', :key='Component.type.name', :data='Component.type.name')
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
