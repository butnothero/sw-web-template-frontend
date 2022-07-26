import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiHashtags extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/hashtags`,
      },
    });
  }

  /**
   * Получить публикации пользователей по Id хештега
   * @param hashtagId Id хештега
   * @param page Текущая страница
   * @param limit Ограничение на кол-во публикаций
   */
  getUsersPostsByHashtagId(hashtagId: string, page = 1, limit = 20) {
    return this.get(`?id=${hashtagId}&page=${page}&limit=${limit}`);
  }

  /**
   * Получить публикации пользователей по названию хештега
   * @param hashtagName Название хештега
   * @param page Текущая страница
   * @param limit Ограничение на кол-во публикаций
   */
  getUsersPostsByHashtagName(hashtagName: string, page = 1, limit = 20) {
    return this.get(`/tag?tag=${hashtagName}&page=${page}&limit=${limit}`);
  }
}

export const apiHashtags = new ApiHashtags();
