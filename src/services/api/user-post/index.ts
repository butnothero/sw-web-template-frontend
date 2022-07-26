import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiUserPost extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/userpost`,
      },
    });
  }

  /**
   * Получить публикацию по Id
   * @param postId Id публикации
   */
  getPostById(postId: string) {
    return this.get(`?post_id=${postId}`);
  }

  /**
   * Получить публикации автора
   * @param authorId Id автора
   * @param page Текущая страница
   * @param limit Ограничение на кол-во публикаций
   */
  getPostsByAuthorId(authorId: string, page = 1, limit = 20) {
    return this.get(`/list?author_id=${authorId}&page=${page}&limit=${limit}`);
  }

  /**
   * Получить истории автора
   * @param authorId Id автора
   */
  getStoriesByAuthorId(authorId: string) {
    return this.get(`/userstoryes?author_id=${authorId}`);
  }

  /**
   * Получение публикаций для раздела QR Top
   * @param page Текущая страница
   * @param limit Ограничение на кол-во публикаций
   */
  getQrTop(page = 1, limit = 20) {
    return this.get(`/qrtop?page=${page}&limit=${limit}`);
  }

  /**
   * Поставить или убрать лайк публикации
   * @param postId Id публикации
   */
  togglePostLike(postId: string) {
    return this.post('/like', { post_id: postId });
  }

  /**
   * Получить комментарии к публикации
   * @param postId Id публикации
   * @param page Текущая страница
   * @param limit Ограничение на кол-во комментариев
   */
  getPostComments(postId: string, page = 1, limit = 100) {
    return this.get(`/comments?post_id=${postId}&page=${page}&limit=${limit}`);
  }
}

export const apiUserPost = new ApiUserPost();
