import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiFollow extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/follow`,
      },
    });
  }

  /**
   * Получить подписчиков пользователя
   * @param userId Id пользователя
   */
  getFollowers(userId: string) {
    return this.get(`/followers?id=${userId}`);
  }

  /**
   * Получить подписки пользователя
   * @param userId Id пользователя
   */
  getFollowing(userId: string) {
    return this.get(`/following?id=${userId}`);
  }

  /**
   * Подписаться на пользователя
   * @param userId Id пользователя
   */
  subscribeToUser(userId: string) {
    return this.post(`/following`, { user_id: userId });
  }

  /**
   * Отменить подписку на пользователя
   * @param userId Id пользователя
   */
  unsubscriveToUser(userId: string) {
    return this.delete(`/following`, { user_id: userId });
  }
}

export const apiFollow = new ApiFollow();
