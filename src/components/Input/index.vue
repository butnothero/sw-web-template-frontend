<script setup lang="ts">
import { getClassMods, getIconClassMods } from '@/services';

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
  errorText: {
    type: String,
    default: '',
  },
  classMods: {
    type: [String, Array as () => string[]],
    default: '',
  },
  py: {
    type: String,
    default: '8px',
  },
  timeout: {
    type: Number,
    default: -1,
  },
});

const emit = defineEmits(['update:modelValue', 'input', 'focusout', 'blur', 'focus', 'timeout']);

const _model = useVModel(props, 'modelValue');

const timer = ref();
const showPassword = ref(false);
const inputType = ref(props.type);

const emitTimeout = (e: Event) => {
  emit('timeout', e);
};

const createTimer = () => {
  if (props.timeout <= 0) return;

  timer.value = setTimeout(emitTimeout, props.timeout);
};

const clearTimer = () => {
  clearTimeout(timer.value);
  timer.value = undefined;
};

const onInput = (e: any) => {
  if (timer.value) {
    clearTimer();
  }

  createTimer();

  _model.value = e.target.value;
  emit('input', e);
};

const onFocusout = (e: any) => {
  emit('focusout', e);
};

const onBlur = (e: any) => {
  emit('blur', e);
};

const onFocus = (e: Event) => {
  emit('focus', e);
};

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
label.input-field(
  :class='[getClassMods("input-field", classMods), { "input-field--error": error }]'
)
  .input-field__label(v-if='label') {{ label }} #[span {{ required ? '*' : '' }}]
  .input-field__input-wrap
    input.input-field__input(
      :class='[{ "input-field__input--password": type === "password" }]',
      :readonly='!autocomplete',
      onfocus='this.removeAttribute(\'readonly\')',
      :type='inputType',
      :placeholder='placeholder',
      :value='_model',
      :required='required',
      :disabled='disabled',
      @input='onInput',
      @focusout='onFocusout',
      @blur='onBlur',
      @focus='onFocus'
    )
    template(v-if='allowPasswordViewing && type === "password"')
      .input-field__eye(v-if='!showPassword', @click='toggleShowPassword()')
        IconEye(:class-mods='getIconClassMods(classMods)')
      .input-field__eye(v-else, @click='toggleShowPassword()')
        IconEyeCross(:class-mods='getIconClassMods(classMods)')
    .input-field__error-text(v-if='errorText && error') {{ errorText }}
</template>

<style scoped lang="scss">
.input-field {
  $_block: &;

  @apply relative block;

  &__label {
    @apply block text-15px mb-14px text-primary;

    span {
      @apply text-danger;
    }
  }

  &__input-wrap {
    @apply relative;
  }

  &__input {
    @apply w-full border-1px border-white border-solid px-12px outline-none bg-transparent text-primary text-16px rounded-box;

    padding-top: v-bind('py');
    padding-bottom: v-bind('py');

    &::placeholder {
      @apply text-gray-300 opacity-100;
    }

    &:focus {
      @apply border-sky-500;
    }

    &:disabled {
      @apply cursor-not-allowed;
    }

    &--password {
      @apply pr-42px;
    }
  }

  &__error-text {
    @apply text-danger text-14px mt-8px;
  }

  &__eye {
    @apply absolute top-1/2 right-2px cursor-pointer transform -translate-y-1/2 rounded-box p-6px w-hover:hover:(bg-primary--hover);
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

  &--input-text-white {
    #{$_block} {
      &__input {
        @apply text-white;
      }
    }
  }
}
</style>
