import AxiosWrapper from '@/plugins/axios/wrapper';

class ApiEvent extends AxiosWrapper {
  constructor() {
    super({
      config: {
        baseURL: `${process.env.API_BASE_URL}/event`,
      },
    });
  }

  /**
   * Получить мероприятие
   * @param eventId Id мероприятия
   */
  getEventById(eventId: string) {
    return this.get(`?event_id=${eventId}`);
  }

  /**
   * Присоединиться к мероприятию
   * @param eventId Id мероприятия
   */
  joinToEvent(eventId: string) {
    return this.post(`/join`, { event_id: eventId });
  }

  /**
   * Покинуть мероприятие
   * @param eventId Id мероприятия
   */
  leaveFromEvent(eventId: string) {
    return this.delete(`/join`, { event_id: eventId });
  }

  /**
   * Поставить или убрать лайк мероприятию
   * @param eventId Id мероприятия
   */
  toggleEventLike(eventId: string) {
    return this.post('/like', { event_id: eventId });
  }

  /**
   * Получить список участников мероприятия
   * @param eventId Id мероприятия
   */
  getEventMembers(eventId: string) {
    return this.get(`/members?event_id=${eventId}`);
  }
}

export const apiEvent = new ApiEvent();
