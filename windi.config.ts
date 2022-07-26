import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  preflight: false,
  // https://windicss.org/posts/v30.html#attributify-mode
  attributify: {
    prefix: 's',
  },
  darkMode: false,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      //     screens: {
      //       'allow-hover': '100px',
      //     },
      colors: {
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
        high: '140%',
      },
      //     fontFamily: {
      //       gilroy: 'Gilroy, Arial, sans-serif',
      //       montserrat: 'Montserrat, Arial, sans-serif',
      //     },
      textColor: {
        danger: 'red',
        warning: 'yellow',
        success: 'green',
        primary: '#fff',
        'primary--hover': 'rgba(0,0,0,0.15)',
        accent: '#5D2ED5',
        'accent-light': '#7c4eef',
        'accent--hover': '#fec006',
      },
      backgroundColor: {
        danger: 'red',
        warning: 'yellow',
        success: 'green',
        primary: '#062A38',
        accent: '#5D2ED5',
        'accent--hover': '#fec006',
        'accent--disable': '#2c2048',
      },
      borderColor: {
        // primary: 'var(--color-border-primary)',
        // 'primary--hover': 'var(--color-border-primary--hover)',
        // accent: 'var(--color-global-accent)',
        // 'accent-secondary': 'var(--color-global-accent-secondary)',

        danger: 'red',
        warning: 'yellow',
        success: 'green',
        primary: '#062A38',
        accent: '#5D2ED5',
      },
      borderRadius: {
        box: '10px',
      },
    },
  },
  shortcuts: {
    'box-px': 'px-16px',
    'box-mx': 'mx-16px',

    // 'border-header': 'border-solid border-gray-900',
    // 'container-pl': 'pl-45px',
    // 'container-pr': 'pr-45px',
    // 'container-px': 'container-pl container-pr',
    'flex-c-b': 'flex items-center justify-between',
    'flex-c-e': 'flex items-center justify-end',
    'flex-c-c': 'flex items-center justify-center',
    'flex-c': 'flex items-center',
    'flex-e': 'flex items-end',

    'auth-box-mb': 'mb-15px',

    'absolute-x-c': 'absolute transform -translate-x-1/2 left-1/2',
    'absolute-y-c': 'absolute transform -translate-y-1/2 top-1/2',
    'absolute-c-c': 'absolute-x-c absolute-y-c',
    // 'input-field':
    //   'border-1px border-black rounded-10px py-10px px-20px w-full font-montserrat text-14px',
    // 'input-label': 'font-montserrat text-12px mb-5px text-gray-500 block',
    'inner-img': 'object-cover w-full h-full',

    'navbar-icon': 'w-30px h-30px',
    'navbar-icon--active': 'w-25px h-25px',

    'btn-reset': 'bg-transparent border-none cursor-pointer',
  },
});
