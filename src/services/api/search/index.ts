import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiSearch extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/search`,
      },
    });
  }

  /**
   * Поиск пользователей
   * @param context Контекст поиска
   * @param page Текущая страница
   * @param limit Ограничение на кол-во элементов
   */
  users(context: string, page = 1, limit = 20) {
    return this.get(`/users?context=${context}&page=${page}&limit=${limit}`);
  }

  /**
   * Поиск по хештегу
   * @param context Контекст поиска
   * @param page Текущая страница
   * @param limit Ограничение на кол-во элементов
   */
  hashtags(context: string, page = 1, limit = 20) {
    return this.get(`/hashtags?context=${context}&page=${page}&limit=${limit}`);
  }

  /**
   * Поиск мероприятий (поиск по совпадении в названии, месту проведения, категории)
   * @param context Контекст поиска
   * @param page Текущая страница
   * @param limit Ограничение на кол-во элементов
   */
  events(context: string, page = 1, limit = 20) {
    return this.get(`/events?context=${context}&page=${page}&limit=${limit}`);
  }
}

export const apiSearch = new ApiSearch();
