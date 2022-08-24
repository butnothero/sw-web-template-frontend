<script setup lang="ts">
const props = defineProps({
  offset: {
    type: Number,
    default: 500,
  },
  loader: {
    type: Boolean,
    default: true,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
});

const route = useRoute();
const $inf = ref();

const state = reactive({
  homeRoute: String(route.name),
  disable: false,
});

const emit = defineEmits(['load', 'init']);

const isHomeRoute = computed((): boolean => String(route.name) === state.homeRoute);

const onLoad = (index: number, done) => {
  if (!isHomeRoute.value) {
    state.disable = true;
    return;
  }

  emit('load', { page: index, done });
};

watch(
  () => route.name,
  () => {
    if (isHomeRoute.value) {
      state.disable = false;
    }
  },
);

onMounted(() => {
  emit('init', $inf.value);
});
</script>

<template lang="pug">
.infinite-scroll
  q-infinite-scroll(
    ref='$inf',
    @load='onLoad',
    :offset='offset',
    :disable='state.disable',
    :reverse='reverse'
  )
    slot
    template(#loading)
      slot(name='loading')
        Loader(v-if='loader')
</template>

<style scoped lang="scss">
.component {
}
</style>
