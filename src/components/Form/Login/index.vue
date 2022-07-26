<script setup lang="ts">
import { apiAuth } from '@/services';

const emit = defineEmits(['submit', 'error', 'success']);

const props = defineProps({
  disableSubmit: {
    type: Boolean,
    default: false,
  },
});

const state = reactive({
  userData: {
    emailOrNickname: '',
    password: '',
  },
  process: {
    submit: false,
  },
});

const submit = async () => {
  if (props.disableSubmit) return;

  state.process.submit = true;
  emit('submit');

  let response;

  try {
    response = await apiAuth.login({
      username: state.userData.emailOrNickname,
      password: state.userData.password,
    });
  } catch (e) {
    console.error('Ошибка при авторизации', e);
  } finally {
    console.log(response);
    if (response.success === false || !response) {
      emit('error', response.message || 'Неудачная попытка входа');
    } else {
      emit('success', response);
    }

    state.process.submit = false;
  }
};
</script>

<template lang="pug">
form.form-login(@submit.prevent='submit')
  Input.auth-box-mb(
    v-model='state.userData.emailOrNickname',
    placeholder='Никнейм или email',
    :required='true'
  )
  Input.auth-box-mb(
    v-model='state.userData.password',
    placeholder='Пароль',
    type='password',
    :required='true'
  )
  ButtonCommon.form-login__btn-login(
    v-if='!state.process.submit',
    text='Войти',
    class-mods='full',
    type='submit',
    :disable='disableSubmit'
  )
  Loader.form-login__loader(v-else)
</template>

<style scoped lang="scss">
.form-login {
}
</style>
