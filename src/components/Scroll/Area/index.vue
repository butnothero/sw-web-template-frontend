<script setup lang="ts">
const props = defineProps({
  scrollLeft: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['scroll']);

const state = reactive({
  dragging: false,
  click: {
    x: 0,
    y: 0,
  },
});

const isDown = ref(false);
const startX = ref(0);
const scrollLeft = ref(0);
const timeout = ref();

const wrapActiveClass = ref('scroll-area__wrap--active');

const wrap = ref<HTMLElement>();

const emitScroll = () => {
  if (!wrap.value) return;
  emit('scroll', { scrollLeft: wrap.value.scrollLeft, scrollWidth: wrap.value.scrollWidth });

  clearTimeout(timeout.value);

  timeout.value = setTimeout(() => {
    if (!wrap.value) return;
    emit('scroll', { scrollLeft: wrap.value.scrollLeft, scrollWidth: wrap.value.scrollWidth });
  }, 1000);
};

const mousedown = (e) => {
  if (!wrap.value) return;

  let _pageX = e.pageX;

  if (!_pageX) {
    _pageX = e.changedTouches[0].pageX;
  }

  state.click.x = _pageX;

  const rect = wrap.value.getBoundingClientRect();
  isDown.value = true;

  // Get initial mouse position
  startX.value = _pageX - rect.left;

  // Get initial scroll position in pixels from left
  scrollLeft.value = wrap.value.scrollLeft;
};

const mouseleave = () => {
  if (!wrap.value) return;

  isDown.value = false;
  wrap.value.dataset.dragging = String(false);
  wrap.value.classList.remove(wrapActiveClass.value);
};

const mouseup = () => {
  if (!wrap.value) return;

  isDown.value = false;
  wrap.value.dataset.dragging = String(false);
  wrap.value.classList.remove(wrapActiveClass.value);
  state.click.x = 0;
};

const mousemove = (e) => {
  if (!isDown.value || !wrap.value || state.click.x === e.pageX) return;

  const rect = wrap.value.getBoundingClientRect();
  e.preventDefault();

  wrap.value.dataset.dragging = String(true);
  wrap.value.classList.add(wrapActiveClass.value);

  let _pageX = e.pageX;

  if (!_pageX) {
    _pageX = e.changedTouches[0].pageX;
  }

  // Get new mouse position
  const x = _pageX - rect.left;

  // Get distance mouse has moved (new mouse position minus initial mouse position)
  const walk = x - startX.value;

  // Update scroll position of slider from left (amount mouse has moved minus initial scroll position)
  wrap.value.scrollLeft = scrollLeft.value - walk;
  // wrap.value.style.transform = `translateX(-${startX.value - _pageX}px)`;

  emitScroll();
};

const dragstart = (e: Event) => {
  e.preventDefault();
};

const moveWrapViaProps = () => {
  if (!wrap.value) return;

  wrap.value.scrollLeft = props.scrollLeft;
};

onMounted(() => {
  moveWrapViaProps();
});

onActivated(() => {
  moveWrapViaProps();
});

// @mousedown='mousedown',
//   @touchstart='mousedown',
//   @mouseleave='mouseleave',
//   @mouseup='mouseup',
//   @touchend='mouseup',
//   @mousemove='mousemove',
//   @touchmove='mousemove',
//   @dragstart='dragstart'
</script>

<template lang="pug">
.scroll-area(
  @mousedown='mousedown',
  @mouseleave='mouseleave',
  @mouseup='mouseup',
  @mousemove='mousemove',
  @dragstart='dragstart',
  @touchmove='emitScroll'
)
  .scroll-area__wrap(ref='wrap')
    slot
</template>

<style scoped lang="scss">
.scroll-area {
  &__wrap {
    @apply box-content relative w-full h-full z-1 flex pb-0 mb-0 overflow-x-auto overflow-y-hidden;

    transition-property: transform;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      @apply hidden;
    }

    &--active[data-dragging='true'] :deep(.scroll-item) {
      @apply pointer-events-none;
    }
  }
}
</style>
