<script setup lang="ts">
import { useMeta } from 'quasar';
import { apiTodo } from '@/services';
import { Page } from '@/enums';

useMeta({
  title: 'Главная страница',
});

const state = reactive({
  inputVal: '',
  counter: 0,
});

// TODO: Добавить пример с гидратацией
const initTodo = async () => {
  const response = await apiTodo.getTodos();
  console.log('AJAX', response);
};

onMounted(async () => {
  await initTodo();
});
</script>

<template lang="pug">
section.home
  .box-px.home__container
    Button(@click='++state.counter', :text='`count: ${state.counter}`')
    Input.mb-10px(v-model='state.inputVal', placeholder='Введите что-нибудь')
    Image(src='https://a.d-cd.net/8EAAAgKlBeA-960.jpg', alt='Toyota Supra')
    p.home__text Привет :)
    router-link(:to='{ name: Page.LOGIN }') На страницу авторизации
</template>

<style scoped lang="scss">
.home {
  &__text {
    @apply mt-10px text-20px text-green-500;
  }
}
</style>

<route lang="yaml">
name: home
meta:
  layout: cache
</route>
