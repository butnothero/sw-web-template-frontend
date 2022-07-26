import {
  getCurrentDurationDesc,
  getCurrentHourDesc,
  getCurrentMinutDesc,
  getCurrentSecondDesc,
  getHumanDate,
} from '@/services/parsers/date';

const gaps = [
  { desc: getCurrentSecondDesc, min: 1 * 1000, max: 60 * 1000 },
  { desc: getCurrentMinutDesc, min: 60 * 1000, max: 3600 * 1000 },
  { desc: getCurrentHourDesc, min: 3600 * 1000, max: 86400 * 1000 },
  { desc: getCurrentDurationDesc, min: 86400 * 1000, max: 86400 * 1000 * 365 },
];

export default (date: string) => {
  const difference = Date.now() - Number(new Date(date));
  if (difference < 1000) return `1 секунду назад`;

  const gap = gaps.find((g) => g.min <= difference && g.max > difference);
  if (!gap) return getHumanDate(date);

  const number = Math.floor(difference / gap.min);
  return `${number} ${gap.desc(number)} назад`;
};
