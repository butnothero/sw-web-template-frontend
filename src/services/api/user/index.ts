import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiUser extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/user`,
      },
    });
  }

  /**
   * Получить информацию о пользователе по ID
   * @param userId ID пользователя
   */
  getUserById(userId: string) {
    return this.get(`?id=${userId}`);
  }

  /**
   * Получить пользователей по контексту
   * @param context
   */
  getUsersByContext(context: string) {
    return this.get(`/search?context=${context}`);
  }
}

export const apiUser = new ApiUser();
