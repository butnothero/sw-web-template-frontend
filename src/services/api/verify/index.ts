import AxiosWrapper from '@/plugins/axios/wrapper';
import { ICreateVerifyData } from '@/interfaces/api/verify';

class ApiVerify extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/verify`,
      },
    });
  }

  /**
   * Проверка данных пользователя при регистрации
   * @param data Данные пользователя
   */
  verify(data: ICreateVerifyData) {
    return this.post('', data);
  }
}

export const apiVerify = new ApiVerify();
