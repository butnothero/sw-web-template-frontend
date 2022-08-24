/**
 * Получить значение в булевом формате
 * @param value Значение
 */
export const getBool = (value: unknown): boolean => {
  if (typeof value === 'boolean') return value;
  if (value === 'true') return true;
  if (value === 'false') return false;
  return false;
};
