import type { Theme } from '@/interfaces';
import { Cookies, useMeta, useQuasar } from 'quasar';
import { isServer } from '@/helpers';

export const useAppTheme = () => {
  const getters = {
    getPrefix() {
      return '-theme';
    },

    getAvailableThemes(): Theme[] {
      return ['light', 'dark'];
    },

    getCurrentTheme(): string | Theme {
      const classNames = this.getHtml().className.split(' ');

      if (classNames.length === 0) return 'light';

      for (const className of classNames) {
        if (className.includes(this.getPrefix())) {
          return className.replace(this.getPrefix(), '');
        }
      }

      return 'light';
    },

    getHtml(): HTMLElement {
      return document.documentElement;
    },

    getBrowserTheme(): string {
      const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (hasDarkPreference) {
        return 'dark';
      }
      return '';
    },

    getCookieName(): string {
      return 'appTheme';
    },

    getFormat(theme: Theme | string) {
      return `${theme}${this.getPrefix()}`;
    },
  };

  const actions = {
    setTheme(theme: Theme = 'light') {
      if (isServer) return;

      const currentTheme = getters.getCurrentTheme();

      if (!this.isValidTheme(theme) || currentTheme === theme) return;

      const $html = getters.getHtml();

      if ($html.className.includes(getters.getPrefix())) {
        if (theme === 'light') {
          $html.classList.remove(getters.getFormat(currentTheme));
        } else {
          $html.classList.replace(getters.getFormat(currentTheme), getters.getFormat(theme));
        }
      } else {
        $html.classList.add(getters.getFormat(theme));
      }

      Cookies.set(getters.getCookieName(), theme, { expires: 100000000, path: '/' });
    },

    isValidTheme(theme: string | Theme): boolean {
      return getters.getAvailableThemes().indexOf(<'light' | 'dark'>theme) !== -1;
    },

    init() {
      const $q = useQuasar();
      const cookieTheme = $q.cookies.get(getters.getCookieName());
      if (!cookieTheme && !isServer) {
        const browserTheme = getters.getBrowserTheme();
        if (this.isValidTheme(browserTheme)) {
          this.setTheme(browserTheme as Theme);
        }
      } else if (cookieTheme) {
        useMeta({
          htmlAttr: {
            class: cookieTheme === 'light' ? '' : getters.getFormat(cookieTheme),
          },
        });
      }
    },
  };

  return {
    ...actions,
    ...getters,
  };
};
