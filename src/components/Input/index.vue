<script setup lang="ts">
import { getClassMods } from '@/services';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: Boolean,
    default: true,
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  error: {
    type: Boolean,
    default: false,
  },
  allowPasswordViewing: {
    type: Boolean,
    default: true,
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
});

const emit = defineEmits(['onInput', 'update:modelValue']);

const _model = useVModel(props, 'modelValue');

const showPassword = ref(false);
const inputType = ref(props.type);

const toggleShowPassword = () => {
  if (props.type !== 'password') return;

  showPassword.value = !showPassword.value;

  if (showPassword.value) {
    inputType.value = 'text';
  } else {
    inputType.value = 'password';
  }
};
</script>

<template lang="pug">
.input-field(:class='[getClassMods("input-field", classMods), { "input-field--error": error }]')
  label.input-field__label(v-if='label') {{ label }}
  .input-field__input-wrap
    input.input-field__input(
      :class='[{ "input-field__input--password": type === "password" }]',
      :readonly='!autocomplete',
      onfocus='this.removeAttribute(\'readonly\')',
      :type='inputType',
      :placeholder='placeholder',
      v-model='_model',
      :required='required',
      @input='emit("onInput", _model)',
      :disabled='disabled'
    )
    template(v-if='allowPasswordViewing && type === "password"')
      .input-field__eye(v-if='!showPassword', @click='toggleShowPassword()')
        ImageEye
      .input-field__eye(v-else, @click='toggleShowPassword()')
        ImageEyeCross
</template>

<style scoped lang="scss">
.input-field {
  $_block: &;

  @apply relative w-full;

  &__label {
    @apply block text-15px mb-14px text-primary;
  }

  &__input-wrap {
    @apply relative;
  }

  &__input {
    @apply w-full border-1px border-white px-12px py-14px outline-none bg-transparent text-primary text-16px rounded-box;

    &::placeholder {
      @apply text-gray-300;

      opacity: 1;
    }

    &:focus {
      @apply border-sky-500;
    }

    &--password {
      @apply pr-42px;
    }
  }

  &__eye {
    @apply absolute top-1/2 right-2px cursor-pointer transform -translate-y-1/2 rounded-box p-9px hover:(bg-primary--hover);
  }

  :deep(.image) {
    filter: $color-icon-to-white;
  }

  &--error {
    #{$_block} {
      &__label {
        @apply text-danger;
      }

      &__input {
        @apply border-danger;

        &:focus {
          @apply border-sky-500;
        }
      }
    }
  }

  &--border-b-only {
    #{$_block} {
      &__input {
        @apply rounded-none border-t-0 border-l-0 border-r-0;
      }

      &__label {
        @apply mb-4px;
      }
    }
  }
}
</style>
