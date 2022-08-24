export const windowDefined = (): boolean => typeof window !== 'undefined';

/**
 * Запретить/Разрешить скролл объекта document
 * @param forceType Принудительный запрет или разрешения скролла
 */
export const toggleBodyScroll = (forceType: 'remove' | 'add' | '' = '') => {
  if (!windowDefined()) return;

  if (forceType === 'remove') {
    document.body.classList.remove('hide-scroll');
    return;
  }
  if (forceType === 'add') {
    document.body.classList.add('hide-scroll');
    return;
  }
  document.body.classList.toggle('hide-scroll');
};
