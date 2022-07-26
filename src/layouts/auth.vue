<template lang="pug">
.auth
  main.auth__main
    .auth__view
      router-view(v-slot='{ Component }')
        component(:is='Component')
</template>

<style scoped lang="scss">
.auth {
  @apply min-h-100vh;

  background: $color-login-page;

  &__main {
    @apply box-px pt-40px pb-20px;
  }
}
</style>
