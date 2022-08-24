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

export const getIsoDate = (value = '') => {
  const date = new Date(value);

  const pad = (number) => {
    if (number < 10) {
      return `0${number}`;
    }
    return number;
  };

  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(
    date.getHours(),
  )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${(date.getMilliseconds() / 1000)
    .toFixed(3)
    .slice(2, 5)}`;
};

// --------------------------------------

const gaps = [
  { desc: getCurrentSecondDesc, min: 1 * 1000, max: 60 * 1000 },
  { desc: getCurrentMinutDesc, min: 60 * 1000, max: 3600 * 1000 },
  { desc: getCurrentHourDesc, min: 3600 * 1000, max: 86400 * 1000 },
  { desc: getCurrentDurationDesc, min: 86400 * 1000, max: 86400 * 1000 * 365 },
];

export const getDatePast = (date: string) => {
  const difference = Date.now() - Number(new Date(date));
  if (difference < 1000) return `1 секунду назад`;

  const gap = gaps.find((g) => g.min <= difference && g.max > difference);
  if (!gap) return getHumanDate(date);

  const number = Math.floor(difference / gap.min);
  return `${number} ${gap.desc(number)} назад`;
};

