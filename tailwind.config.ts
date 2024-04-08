import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A0D95A',
        'dark-primary': '#6C8F3C',
        'light-primary': '#DEF2CD',
        accent: '#FFC107',
        background: '#FAFAFA',
        'primary-text': '#333333',
        'secondary-text': '#777777',
        divider: '#EEEEEE',
      },
    },
  },
  plugins: [],
} satisfies Config;
