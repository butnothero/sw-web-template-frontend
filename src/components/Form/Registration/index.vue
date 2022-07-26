<script setup lang="ts">
import { apiVerify } from '@/services';

const emit = defineEmits(['submit', 'error', 'success', 'disable']);

const props = defineProps({
  disableSubmit: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  userData: {
    phone: '',
    email: '',
    username: '',
  },
  process: {
    submit: false,
  },
});

const submit = async () => {
  if (props.disableSubmit) {
    emit('disable');
    return;
  }

  state.process.submit = true;
  emit('submit');

  let response;

  try {
    response = await apiVerify.verify({
      phone: state.userData.phone,
      email: state.userData.email,
      username: state.userData.username,
    });
  } catch (e) {
    console.error('Ошибка при авторизации', e);
  } finally {
    if (response.data.success === false || !response) {
      emit('error', response.data.message || 'Неудачная попытка входа');
    } else {
      emit('success', response.data, state.userData);
    }

    state.process.submit = false;
  }
};
</script>

<template lang="pug">
form.form-login(@submit.prevent='submit')
  Input.auth-box-mb(
    v-model='state.userData.phone',
    placeholder='Номер телефона',
    :required='state.userData.email === ""'
  )
  Input.auth-box-mb(
    v-model='state.userData.email',
    placeholder='Электронная почта',
    :required='state.userData.phone === ""',
    type='email'
  )
  Input.auth-box-mb(v-model='state.userData.username', placeholder='Никнейм', :required='true')
  ButtonCommon.form-login__btn-login(
    v-if='!state.process.submit',
    text='Выслать код',
    class-mods='full',
    type='submit',
    :disable='disableSubmit'
  )
  Loader.form-login__loader(v-else)
</template>

<style scoped lang="scss">
.component {
}
</style>
