import { Emitter, EventType } from 'mitt';

export const useEmitter = <Events extends Record<EventType, unknown>>(): Emitter<any> => {
  const internalInstance: any = getCurrentInstance();
  const { emitter } = internalInstance.appContext.config.globalProperties;

  return emitter;
};
