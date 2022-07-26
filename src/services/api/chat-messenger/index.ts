import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiChatMessenger extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/chat-messenger`,
      },
    });
  }

  /**
   * Получить список диалогов пользователя
   */
  getUserDialogs() {
    return this.get('/dialog');
  }

  /**
   * Получить список сообщений в диалоге
   * @param dialogId Id диалога
   * @param page Текущая страница
   * @param limit Ограничение на кол-во сообщений
   */
  getDialogMessages(dialogId: string, page = 1, limit = 30) {
    return this.get(`/messages?dialog_id=${dialogId}&page=${page}&limit=${limit}`);
  }

  /**
   * Получить список участников в диалоге
   * @param dialogId Id диалога
   */
  getDialogMembers(dialogId: string) {
    return this.get(`/members?dialog_id=${dialogId}`);
  }

  /**
   * Отметить сообщения в диалоге как прочитанные
   * @param dialogId Id диалога
   */
  markMessagesAsRead(dialogId: string) {
    return this.put('/read', { dialog_id: dialogId });
  }
}

export const apiChatMessenger = new ApiChatMessenger();
