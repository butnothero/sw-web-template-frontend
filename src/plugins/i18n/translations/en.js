import loginPage from './en-US/pages/login';
import searchPage from './en-US/pages/search';
import profilePage from './en-US/pages/profile';
import eventPage from './en-US/pages/event';
import notificationsPage from './en-US/pages/notifications';
import post from './en-US/post';

export default {
  home: 'Main page',
  about: 'About page',
  notfound: 'Page not found',
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
