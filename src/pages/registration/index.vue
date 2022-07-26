<script setup lang="ts">
// import FormRegistration from '@/components/Form/Registration/index.vue';
// import PopupChooseRegistrationCode from '@/components/Popup/Choose/RegistrationCode/index.vue';
// import IconArrow from '@/components/Icon/Arrow/index.vue';
// import { useAuthUserStore } from '@/store/authUser';
// import { apiURL } from '../../../env.common';
//
// const state = reactive({
//   showPopup: false,
//   status: {
//     verifyCode: false,
//     disableSendAgain: false,
//     disableContinue: false,
//     disableRegister: false,
//     disableSubmit: true,
//   },
//   verifyType: -1 as -1 | 0 | 1,
//   verifyId: '',
//   verifyCode: '',
//   verifySuccess: 'n' as 'y' | 'n',
//   userData: {
//     email: '',
//     phone: '',
//     username: '',
//     firstName: '',
//     secondName: '',
//     description: '',
//     password: '',
//   },
//   agreement: {
//     community: false,
//     license: false,
//   },
// });
//
// const userStore = useAuthUserStore();
// const router = useRouter();
// const route = useRoute();
//
// const setTimer = () => {
//   state.status.disableSendAgain = true;
// };
//
// const removeTimer = () => {
//   state.status.disableSendAgain = false;
// };
//
// const transformSlotProps = (props) => {
//   const formattedProps = {};
//
//   Object.entries(props).forEach(([key, value]) => {
//     // @ts-ignore
//     formattedProps[key] = value < 10 ? `0${value}` : String(value);
//   });
//
//   return formattedProps;
// };
//
// const sendVerifyCodeToUser = async () => {
//   if (state.status.disableSendAgain) return;
//   state.status.disableSendAgain = true;
//   await axios.get(`${apiURL}/verify?id=${state.verifyId}&type=${state.verifyType}`);
// };
//
// const goToVerify = async () => {
//   if (state.userData.phone === '') {
//     state.verifyType = 1;
//   } else if (state.userData.email === '') {
//     state.verifyType = 0;
//   }
//
//   await router.push({
//     name: 'registration',
//     query: {
//       verifyId: state.verifyId,
//       verifyType: state.verifyType,
//       email: state.userData.email,
//       phone: state.userData.phone,
//       username: state.userData.username,
//     },
//   });
//
//   await sendVerifyCodeToUser();
//   setTimer();
// };
//
// const goToVerifySuccess = async () => {
//   await router.push({
//     name: 'registration',
//     query: {
//       verifySuccess: state.verifySuccess,
//       verifyId: state.verifyId,
//       verifyType: state.verifyType,
//       email: state.userData.email,
//       phone: state.userData.phone,
//       username: state.userData.username,
//     },
//   });
// };
//
// const reset = (changeRoute = true) => {
//   state.verifyId = '';
//   state.verifyType = -1;
//   state.verifyCode = '';
//   state.userData.email = '';
//   state.userData.phone = '';
//   state.userData.username = '';
//   state.status.verifyCode = false;
//   state.status.disableSendAgain = false;
//
//   if (changeRoute) {
//     router.push({ name: 'registration' });
//   }
// };
//
// const onError = (message = 'Неудачная попытка регистрации') => {
//   alert(message);
// };
//
// const onSuccess = (responseData, userData) => {
//   if (!responseData.verify_id) {
//     onError();
//     return;
//   }
//
//   state.verifyId = responseData.verify_id;
//   state.userData.email = userData.email;
//   state.userData.phone = userData.phone;
//   state.userData.username = userData.username;
//
//   if (userData.email && userData.phone) {
//     state.showPopup = true;
//   } else {
//     goToVerify();
//   }
// };
//
// /**
//  *
//  * @param type 0-телефон, 1-email
//  */
// const selectVerifyType = (type: 0 | 1) => {
//   state.verifyType = type;
//   goToVerify();
// };
//
// const verifyAccount = async () => {
//   const response = await axios.post(`${apiURL}/verify/code`, {
//     code: state.verifyCode,
//     id: state.verifyId,
//   });
//   if (!response.data.success) {
//     onError(response.data.message);
//   } else {
//     state.verifySuccess = 'y';
//     await goToVerifySuccess();
//   }
// };
//
// const registrationUser = async () => {
//   let response;
//   state.status.disableRegister = true;
//
//   try {
//     response = await axios.post(`${apiURL}/verify/registration`, {
//       verify_id: state.verifyId,
//       password: state.userData.password,
//       frst_name: state.userData.firstName,
//       scnd_name: state.userData.secondName,
//       description: state.userData.description,
//     });
//   } catch (e) {
//     console.error('registrationUser', e);
//   } finally {
//     if (!response || !response.data.success) {
//       onError(response.data.message);
//     }
//
//     state.status.disableRegister = false;
//     console.log(response.data);
//   }
// };
//
// const onDisable = () => {
//   alert('Вы должны принять правила!');
// };
//
// watch(
//   () => route.query.verifyId,
//   (value) => {
//     if (value === '' || typeof value === 'undefined') return;
//     state.status.verifyCode = true;
//   },
// );
//
// watch(
//   () => state.agreement.community,
//   (value) => {
//     state.status.disableSubmit = !(value && state.agreement.license);
//   },
// );
//
// watch(
//   () => state.agreement.license,
//   (value) => {
//     state.status.disableSubmit = !(value && state.agreement.community);
//   },
// );
//
// onMounted(async () => {
//   const q = route.query;
//   if (
//     typeof (
//       q.verifyId &&
//       (q.verifyType === '0' || q.verifyType === '1') &&
//       q.email &&
//       q.phone &&
//       q.username
//     ) !== 'undefined'
//   ) {
//     state.verifyId = String(q.verifyId);
//     // @ts-ignore
//     state.verifyType = Number(q.verifyType);
//     state.userData.email = String(q.email);
//     state.userData.phone = String(q.phone);
//     state.userData.username = String(q.username);
//     state.status.verifyCode = true;
//
//     if (typeof q.verifySuccess !== 'undefined') {
//       // @ts-ignore
//       state.verifySuccess = String(q.verifySuccess);
//     }
//
//     if (state.verifySuccess === 'n') {
//       await sendVerifyCodeToUser();
//       setTimer();
//     }
//   } else {
//     reset(false);
//   }
// });
</script>

<template lang="pug">
.registration
  //template(v-if='state.verifySuccess !== "y"')
  //  .registration__logo
  //    img(src='@/assets/img/sitelogo.svg')
  //  button.registration__back-btn(v-if='state.status.verifyCode', @click='reset')
  //    IconArrow
  //template(v-if='!state.status.verifyCode')
  //  PopupChooseRegistrationCode(v-model:showPopup='state.showPopup', @selected='selectVerifyType')
  //  .registration__promo.registration__text Введите свой номер телефона или Email, либо всё вместе :)
  //  FormRegistration.registration__form(
  //    @success='onSuccess',
  //    @error='onError',
  //    @disable='onDisable',
  //    :disable-submit='state.status.disableSubmit'
  //  )
  //  .registration__help-row
  //    router-link.registration__link.registration__text(:to='{ name: "login" }') Уже имеете аккаунт?
  //  .registration__agreements-row
  //    .registration__agreement-wrap
  //      InputCheckbox.registration__agreement(
  //        v-model='state.agreement.community',
  //        :styles='["error"]'
  //      )
  //      .registration__agreement-text Я принимаю #[router-link(:to='{ name: "communityRules" }') правила сообщества]
  //    .registration__agreement-wrap
  //      InputCheckbox.registration__agreement(
  //        v-model='state.agreement.license',
  //        :styles='["error"]'
  //      )
  //      .registration__agreement-text Я принимаю #[router-link(:to='{ name: "licenseAgreement" }') лицензионное соглашение]
  //template(v-if='state.verifyId && state.verifyType === 0 && state.verifySuccess !== "y"')
  //  form.registration__verify(@submit.prevent='verifyAccount')
  //    .registration__promo.registration__text Введите последние 4 цифры номера, который позвонит вам на номер: {{ state.userData.phone }}
  //    Input(
  //      v-model='state.verifyCode',
  //      :required='true',
  //      placeholder='Введите код',
  //      type='password'
  //    )
  //    ButtonCommon.registration__btn-continue(
  //      v-if='!state.status.disableContinue',
  //      text='Продолжить',
  //      styles='full'
  //    )
  //    Loader.registration__btn-continue(v-else)
  //  .registration__send-again(v-if='!state.status.disableSendAgain')
  //    vue-countdown(
  //      v-if='state.status.disableContinue',
  //      @end='removeTimer',
  //      :time='60 * 1000',
  //      :transform='transformSlotProps',
  //      v-slot='{ minutes, seconds }'
  //    )
  //      .registration__text.registration__text--timer {{ minutes }}:{{ seconds }}
  //    .registration__text(v-else)
  //    .registration__text(@click='sendVerifyCodeToUser') Повторить звонок
  //template(v-if='state.verifyId && state.verifyType === 1 && state.verifySuccess !== "y"')
  //  form.registration__verify(@submit.prevent='verifyAccount')
  //    .registration__promo.registration__text Введите код, который мы выслали вам на почту {{ state.userData.email }}
  //    Input(
  //      v-model='state.verifyCode',
  //      :required='true',
  //      placeholder='Введите код',
  //      type='password'
  //    )
  //    ButtonCommon.registration__btn-continue(
  //      v-if='!state.status.disableContinue',
  //      text='Продолжить',
  //      styles='full'
  //    )
  //    Loader.registration__btn-continue(v-else)
  //  .registration__send-again(v-if='!state.status.disableContinue')
  //    vue-countdown(
  //      v-if='state.status.disableSendAgain',
  //      @end='removeTimer',
  //      :time='60 * 1000',
  //      :transform='transformSlotProps',
  //      v-slot='{ minutes, seconds }'
  //    )
  //      .registration__text.registration__text--timer {{ minutes }}:{{ seconds }}
  //    .registration__text(v-else)
  //    .registration__text(@click='sendVerifyCodeToUser') Отправить снова
  //template(v-if='state.verifySuccess === "y"')
  //  h1.registration__profile-title Осталось совсем немного
  //  form.registration__profile(@submit.prevent='registrationUser')
  //    Input.registration__profile-input(
  //      v-model='state.userData.firstName',
  //      :required='true',
  //      label='Имя (обязательно)',
  //      styles='border-b-only',
  //      placeholder='Имя'
  //    )
  //    Input.registration__profile-input(
  //      v-model='state.userData.secondName',
  //      :required='true',
  //      label='Фамилия (обязательно)',
  //      styles='border-b-only',
  //      placeholder='Фамилия'
  //    )
  //    Input.registration__profile-input(
  //      v-model='state.userData.password',
  //      :required='true',
  //      label='Пароль (обязательно)',
  //      styles='border-b-only',
  //      type='password',
  //      placeholder='Пароль'
  //    )
  //    Input.registration__profile-input(
  //      v-model='state.userData.description',
  //      label='Описание профиля',
  //      styles='border-b-only',
  //      placeholder='Описание профиля'
  //    )
  //    ButtonCommon(v-if='!state.status.disableRegister', text='Сохранить изменения', styles='full')
  //    Loader(v-else)
</template>

<style scoped lang="scss">
.registration {
  &__logo {
    @apply text-center mb-40px;
  }

  &__back-btn {
    @apply absolute top-20px left-20px p-10px bg-transparent border-none;
  }

  &__help-row {
    @apply flex-c-e mt-30px;
  }

  &__text {
    @apply text-white text-14px;

    &--timer {
      @apply text-gray-300;
    }
  }

  &__link {
    @apply no-underline;
  }

  &__promo {
    @apply text-center text-16px mb-30px leading-normal;
  }

  &__btn-continue {
    @apply mt-20px;
  }

  &__send-again {
    @apply flex-c-b mt-30px;
  }

  &__profile-title {
    @apply text-white text-center mt-0 mb-40px;
  }

  &__profile-input {
    @apply mb-40px;
  }

  &__agreement-wrap {
    @apply flex-c mt-15px first:(mt-25px);
  }

  &__agreement-text {
    @apply ml-10px text-white text-16px;

    a {
      @apply text-white;
    }
  }
}
</style>
