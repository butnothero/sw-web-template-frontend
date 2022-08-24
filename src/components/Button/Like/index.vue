<script setup lang="ts">
import type { IconProps } from '@/interfaces';
import { getClassMods } from '@/services';

const props = defineProps({
  iconLikeProps: {
    type: Object as () => IconProps,
    default: undefined,
  },
  iconDontLikeProps: {
    type: Object as () => IconProps,
    default: undefined,
  },
  modelValue: {
    type: Boolean,
    default: false,
    required: true,
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  showCount: {
    default: false,
  },
  count: {
    default: 0,
  },
});

const emit = defineEmits(['update:modelValue', 'toggle', 'set', 'unset']);

const state = reactive({
  liked: useVModel(props, 'modelValue'),
  count: props.count,
});

const onClick = () => {
  if (state.liked) {
    state.liked = false;
    emit('unset');
  } else {
    state.liked = true;
    emit('set');
  }

  emit('toggle', state.liked);
};
</script>

<template lang="pug">
button.btn-like(@click.prevent='onClick', :class='getClassMods("btn-like", classMods)')
  IconHeart(v-if='!state.liked', size='24px', v-bind='iconLikeProps')
  IconHeartFill(v-else, size='24px', v-bind='iconDontLikeProps')
  .btn-like__count(v-if='showCount') {{ count }}
</template>

<style scoped lang="scss">
.btn-like {
  $_block: &;

  @apply btn-only-icon flex-c gap-10px;

  &__count {
    @apply text-12px text-primary;
  }

  &--vertical {
    @apply flex-c-c flex-col;
  }

  &--text-white {
    #{$_block} {
      &__count {
        @apply text-white;
      }
    }
  }
}
</style>
