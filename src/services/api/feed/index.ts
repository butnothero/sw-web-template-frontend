import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiFeed extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/feed`,
      },
    });
  }

  /**
   * Получить ленту пользователя (публикации и мероприятия)
   * @param page Текущая страница
   * @param limit Ограничение на кол-во элементов
   */
  getUserFeed(page = 1, limit = 20) {
    return this.get(`/feed?page=${page}&limit=${limit}`);
  }
}

export const apiFeed = new ApiFeed();
