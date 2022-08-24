<script setup lang="ts">
import type { IconProps } from '@/interfaces';

const props = defineProps({
  iconProps: {
    type: Object as () => IconProps,
  },
  to: {
    type: [Number, Object],
    default: -1,
  },
  makeCount: {
    type: Boolean,
    default: true,
  },
});

const route = useRoute();
const router = useRouter();

const state = reactive({
  goCount: 1,
});

const onClick = () => {
  const { to } = props;

  try {
    if (typeof to === 'number') {
      router.go(to * state.goCount);
    } else if (typeof to === 'object') {
      router.push(to);
    } else {
      throw 'Неверный тип to';
    }
  } catch (e) {
    console.error(e, to);
  }
};

watch(
  () => route.name,
  () => {
    if (props.makeCount) {
      ++state.goCount;
    }
  },
);
</script>

<template lang="pug">
button.btn-back(@click='onClick')
  IconArrow(size='22px', class-mods='white', v-bind='iconProps')
</template>

<style scoped lang="scss">
.btn-back {
  @apply btn-only-icon p-8px;
}
</style>
