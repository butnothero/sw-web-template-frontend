import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: {
    prefix: 'w',
  },
  darkMode: false,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'w-hover': '100px',
      },
      colors: {
        danger: '#FD4A3B',
        warning: 'yellow',
        success: '#46EE7A',
        gray: {
          900: '#1B1B1B',
          600: '#333333',
          500: '#545454',
          400: '#5a5a5a',
          350: '#696969',
          300: '#a4a4a4',
          200: '#a1a1a1',
        },
      },
      lineHeight: {
        primary: '130%',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
      },
      borderRadius: {
        box: '10px',
      },
    },
    padding: {
      box: '16px',
      auto: 'auto',
      'loader-wrap': '40px',
    },
    margin: {
      box: '16px',
      auto: 'auto',
    },
    width: {
      'col-s': '60px',
      'col-m': '100px',
      'col-l': '120px',
      full: '100%',
    },
  },
  variants: {
    scrollbar: ['rounded'],
  },
  shortcuts: {
    // Flex
    'flex-c-b': 'flex items-center justify-between',
    'flex-c-e': 'flex items-center justify-end',
    'flex-c-c': 'flex items-center justify-center',
    'flex-c': 'flex items-center',
    'flex-e': 'flex items-end',

    // Position absolute
    'absolute-x-c': 'absolute transform -translate-x-1/2 left-1/2',
    'absolute-y-c': 'absolute transform -translate-y-1/2 top-1/2',
    'absolute-c-c': 'absolute-x-c absolute-y-c',

    // Text
    'text-break': 'overflow-hidden break-words',

    // Buttons
    'btn-only-icon': 'p-4px flex-c-c',

    // Title
    'title-common': 'my-20px text-20px text-primary font-700',
  },
});
