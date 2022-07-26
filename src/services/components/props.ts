export const getClassMods = (prefix: string, mods: string | string[], divider = '--'): string => {
  if (mods === '') return '';

  if (typeof mods === 'string') return `${prefix}${divider}${mods}`;

  if (Array.isArray(mods)) {
    let result = '';
    mods.forEach((mod) => {
      result += `${prefix}${divider}${mod} `;
    });
    return result;
  }

  return '';
};
