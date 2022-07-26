import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiPostView extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/post-view`,
      },
    });
  }

  /**
   * Отметить публикацию как просмотренную пользователем
   * @param postId Id публикации
   */
  markPostAsViewed(postId: string) {
    return this.post('', { post_id: postId });
  }
}

export const apiPostView = new ApiPostView();
