interface ClassModsOptions {
  divider?: string;
  ignorePrefix?: string;
}

export const getClassMods = (
  prefix: string,
  mods: string | string[],
  options: ClassModsOptions = {},
): string => {
  if (!mods) return '';

  const { divider = '--', ignorePrefix = 'i-' } = options;

  if (typeof mods === 'string' && mods.substring(0, ignorePrefix.length) !== ignorePrefix)
    return `${prefix}${divider}${mods}`;

  if (Array.isArray(mods)) {
    let result = '';
    mods.forEach((mod) => {
      if (mod.substring(0, ignorePrefix.length) !== ignorePrefix) {
        result += `${prefix}${divider}${mod} `;
      }
    });
    return result;
  }

  return '';
};

export const getIconClassMods = (mods: string | string[], prefix = 'i-'): string | string[] => {
  if (!mods) return '';

  if (typeof mods === 'string' && mods.substring(0, prefix.length) === prefix)
    return mods.replace(prefix, '');

  if (Array.isArray(mods)) {
    const result: string[] = [];
    mods.forEach((mod) => {
      if (mod.substring(0, prefix.length) === prefix) {
        result.push(mod.replace(prefix, ''));
      }
    });

    return result;
  }

  return '';
};
