import loginPage from './ru-RU/pages/login';
import searchPage from './ru-RU/pages/search';
import profilePage from './ru-RU/pages/profile';
import eventPage from './ru-RU/pages/event';
import notificationsPage from './ru-RU/pages/notifications';
import post from './ru-RU/post';

export default {
  home: 'Главная страница',
  about: 'Страница о нас',
  notfound: 'Страница не найдена',
  page: {
    login: {
      ...loginPage,
    },
    search: {
      ...searchPage,
    },
    profile: {
      ...profilePage,
    },
    event: {
      ...eventPage,
    },
    notifications: {
      ...notificationsPage,
    },
  },
  post: {
    ...post,
  },
};
