<script setup lang="ts">
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
});

const emit = defineEmits(['update:modelValue', 'input', 'focusout', 'blur']);

const _model = useVModel(props, 'modelValue');

const showPassword = ref(false);
const inputType = ref(props.type);

const onInput = (e: any) => {
  emit('input', e);
  _model.value = e.target.value;
};

const onFocusout = (e: any) => {
  emit('focusout', e);
};

const onBlur = (e: any) => {
  emit('blur', e);
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
label.input-field(:class='[{ "input-field--error": error }]')
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
      @blur='onBlur'
    )
    template(v-if='allowPasswordViewing && type === "password"')
      .input-field__eye(v-if='!showPassword', @click='toggleShowPassword()')
        IconEye(preset='icon')
      .input-field__eye(v-else, @click='toggleShowPassword()')
        IconEyeCross(preset='icon')
    .input-field__error-text(v-if='errorText && error') {{ errorText }}
</template>

<style scoped lang="scss">
.input-field {
  $_block: &;

  @apply relative block;

  &__label {
    @apply block text-16px mb-14px text-black font-medium;

    span {
      @apply text-danger;
    }
  }

  &__input-wrap {
    @apply relative;
  }

  &__input {
    @apply w-full border-1px border-gray-250 px-12px py-10px outline-none bg-gray-100 text-primary rounded-box;

    &::placeholder {
      @apply text-gray-300 opacity-50;
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
}
</style>
