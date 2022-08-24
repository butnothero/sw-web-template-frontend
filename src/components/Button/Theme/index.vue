<script setup lang="ts">
import { useAppTheme } from '@/composables';
import type { Theme } from '@/interfaces';
import { getClassMods, getIconClassMods } from '@/services';

const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
  themeName: {
    type: String,
    default: 'theme',
  },
  theme: {
    type: String as () => Theme,
    default: 'light',
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});

const appTheme = useAppTheme();
</script>

<template lang="pug">
button.btn-theme(
  @click='appTheme.setTheme(theme)',
  :class='getClassMods("btn-theme", classMods)',
  :title='themeName'
)
  Icon(v-if='icon', :class-mods='getIconClassMods(classMods)', :src='icon', :alt='themeName')
</template>

<style scoped lang="scss">
.btn-theme {
  @apply reset-btn flex-c-c p-2px;
}
</style>
