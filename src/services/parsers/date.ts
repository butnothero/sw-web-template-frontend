const checkDate = (value: string | Date): Date | string => {
  if (typeof value === 'string') {
    return new Date(value);
  }
  return '';
};

const checkDateValue = (value: number) => {
  if (value < 10) return `0${value}`;
  return value;
};

const getDescription = (value: number, desc: Array<string>) => {
  if (value <= 10 || value >= 20) {
    if (value % 10 === 1) {
      return desc[1];
    }
    if (value % 10 >= 2 && value % 10 <= 4) {
      return desc[2];
    }
  }
  return desc[0];
};

export const getHumanDate = (value: string | Date): string => {
  try {
    const date = checkDate(value);

    if (typeof date === 'string') return '';

    const dd: string | number = checkDateValue(date.getDate());
    const mm: string | number = checkDateValue(date.getMonth() + 1);
    const yy: string | number = checkDateValue(date.getFullYear());
    // const yy: string | number = checkDateValue(date.getFullYear() % 100);

    return `${dd}.${mm}.${yy}`;
  } catch (e) {
    console.error('Ошибка при парсинге даты', e);
    return '';
  }
};

export const getHumanTime = (value: string | Date): string => {
  try {
    const startDate = checkDate(value);

    let result = '??';

    if (typeof startDate !== 'string') {
      const startHours = checkDateValue(startDate.getHours());
      const startMinutes = checkDateValue(startDate.getMinutes());
      result = `${startHours}:${startMinutes}`;
    }

    return result;
  } catch (e) {
    console.error('Ошибка при парсинге времени', e);
    return '';
  }
};

export const getHumanDateTime = (value: string | Date): string => {
  const date = getHumanDate(value);
  const time = getHumanTime(value);

  return `${date} ${time}`;
};

export const getCurrentSecondDesc = (number: number) =>
  getDescription(number, ['секунд', 'секунду', 'секунды']);

export const getCurrentMinutDesc = (number: number) =>
  getDescription(number, ['минут', 'минуту', 'минуты']);

export const getCurrentHourDesc = (number: number) =>
  getDescription(number, ['часов', 'час', 'часа']);

export const getCurrentDurationDesc = (number: number) =>
  getDescription(number, ['дней', 'день', 'дня']);
