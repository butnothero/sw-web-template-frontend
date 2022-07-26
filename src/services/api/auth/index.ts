import AxiosWrapper from '@/plugins/axios/wrapper';
import { IAuthLoginData } from '@/interfaces/api/auth';

class ApiAuth extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/auth`,
      },
    });
  }

  /**
   * Авторизация пользователя
   * @param data
   */
  login(data: IAuthLoginData) {
    return this.post('/login', data);
  }
}

export const apiAuth = new ApiAuth();
