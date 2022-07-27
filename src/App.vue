<template lang="pug">
router-view(v-slot='{ Component, route }')
  keep-alive(:include='["cache"]')
    component(:is='Component', :key='Component.type.name', :data='Component.type.name')
</template>
