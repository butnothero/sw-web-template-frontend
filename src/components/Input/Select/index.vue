<script setup lang="ts">
import { getClassMods, getStyleWidth } from '@butnothero/tools';
import type { DynamicObject } from '@/interfaces';

type _Value = string | number | object;

const props = defineProps({
  modelValue: {
    type: [String, Number, Object as () => DynamicObject],
  },
  options: {
    type: [Array as () => _Value[]],
    default: () => [],
  },
  label: {
    default: '',
  },
  width: {
    default: '382px',
  },
  classMods: {
    type: [String, Array as () => string[]],
  },
  py: {
    type: String,
    default: '14px',
  },
  px: {
    type: String,
    default: '16px',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  resettable: {
    type: Boolean,
    default: false,
  },
  resetText: {
    type: String,
    default: 'Сбросить',
  },
  resetValue: {
    type: [String, Number],
    default: '',
  },
});

const emit = defineEmits(['update:modelValue', 'toggle', 'select']);

const $root = ref<HTMLElement>();
const vModel = useVModel(props, 'modelValue');

const optionsStyles = reactive({
  left: '0px',
  top: '0px',
  width: '0px',
});

const is = reactive({
  showOptions: false,
});

const closeOptions = () => {
  is.showOptions = false;
};

const onClickLabel = () => {
  const { disabled } = props;
  if (disabled) return;

  if ($root.value) {
    const rootRect = $root.value.getBoundingClientRect();

    optionsStyles.left = rootRect.left + 'px';
    optionsStyles.top = rootRect.top + rootRect.height + 'px';
    optionsStyles.width = rootRect.width + 'px';
  }

  is.showOptions = !is.showOptions;
  emit('toggle');
};

const onClickOption = (option: string | number | { text: string; type: string }) => {
  const { disabled, resetValue } = props;
  if (disabled) return;

  // TODO: Добавить проверку на тип (например, если тип сброс)
  vModel.value = typeof option === 'object' ? resetValue : option;
  closeOptions();
  emit('select');
};

const tableSkin = {
  icon: {
    size: '14px',
    classMods: 'white',
  },
};

const vBindIcon = () => {
  const { classMods } = props;
  if (classMods && classMods.includes('skin-table')) {
    return { ...tableSkin.icon };
  }
  return {
    size: '16px',
  };
};

const getOptions = () => {
  const { resetText, resettable, options } = props;
  if (!resettable) return options;
  return [{ text: resetText, type: 'reset' }, ...options];
};
</script>

<template lang="pug">
label.input-select(
  ref='$root',
  @click='onClickLabel',
  :class='[getClassMods("input-select", classMods), { "input-select--disabled": disabled }]'
)
  .input-select__label(v-if='label') {{ label }}
  .input-select__value-container
    .input-select__value {{ vModel }}
    .input-select__select-icon
      IconArrowSimple.input-select__icon(
        v-bind='vBindIcon()',
        :class='[{ "input-select__icon--active": is.showOptions }]'
      )
  teleport(to='body', v-if='is.showOptions')
    .input-select__options-list(v-click-outside='closeOptions', :style='{ ...optionsStyles }')
      .input-select__options-list-item(
        v-for='(option, optionIndex) in getOptions()',
        :key='optionIndex',
        @click='onClickOption(option)'
      ) {{ typeof option === 'object' ? option.text : option }}
</template>

<style scoped lang="scss">
.input-select {
  $_block: &;
  @apply relative block;

  &__label {
    @apply input-label;

    span {
      @apply text-danger;
    }
  }

  &__value-container {
    @apply relative flex-c-b bg-input select-none cursor-pointer text-accent text-16px rounded-primary transition w-hover:hover:(bg-input--hover) focus:(bg-input--hover);

    width: v-bind('width');
    padding: v-bind('py') v-bind('px');
  }

  &__icon {
    @apply transition;

    &--active {
      transform: rotate(180deg);
    }
  }

  &__options-list {
    @apply absolute bg-white border-common rounded-primary z-999 shadow-primary;
  }

  &__options-list-item {
    @apply cursor-pointer py-5px px-10px border-b-common w-hover:hover:(bg-accent text-white rounded-primary);

    &:last-child {
      @apply border-b-0;
    }
  }

  &--disabled {
    #{$_block} {
      &__value-container {
        @apply cursor-not-allowed w-hover:hover:(bg-input);
      }
    }
  }

  &--skin-table {
    #{$_block} {
      &__value-container {
        @apply bg-transparent;
      }

      &__value {
        @apply flex-1 text-center text-14px;
      }

      &__select-icon {
        @apply bg-accent rounded-2px p-1px;
      }
    }
  }
}
</style>
