/**
 * Является ли код ответа ошибочным
 * @param code Код ответа
 */
export const isErrorHttp = (code: number): boolean => {
  const _code = Number(code);
  return _code >= 400 && _code <= 599 && _code !== 0;
};
