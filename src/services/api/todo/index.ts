import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiTodo extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/todos`,
      },
    });
  }

  /**
   * Получение списка дел
   */
  getTodos() {
    return this.get('');
  }
}

export const apiTodo = new ApiTodo();
