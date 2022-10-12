<script setup lang="ts">
import { getClassMods } from '@butnothero/tools';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: undefined,
  },
  active: {
    type: Boolean,
    default: false,
  },
  classMods: {
    type: [String, Array as () => string[]],
  },
  forceModel: {
    type: Boolean,
    default: false,
  },
});

const soundIsActive =
  typeof props.modelValue === 'boolean' || props.forceModel
    ? useVModel(props, 'modelValue')
    : ref(props.active);

const emit = defineEmits(['update:modelValue', 'toggle']);

const onClick = () => {
  const { forceModel } = props;

  if (forceModel && typeof soundIsActive.value === 'undefined') {
    soundIsActive.value = true;
  } else {
    soundIsActive.value = !soundIsActive.value;
  }

  emit('toggle');
};
</script>

<template lang="pug">
button.btn-sound(@click='onClick', :class='getClassMods("btn-sound", classMods)')
  IconSoundOn(v-if='soundIsActive', size='18px', class-mods='white')
  IconSoundOff(v-else, size='18px', class-mods='white')
</template>

<style scoped lang="scss">
.btn-sound {
  @apply reset-btn relative bg-[#E5E5E58E] rounded-full p-14px;

  img {
    @apply absolute-c-c;
  }

  &--media {
    @apply absolute right-10px bottom-10px;
  }
}
</style>
