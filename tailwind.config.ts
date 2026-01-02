import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        text: '#1e1e1e',
        muted: '#6b6b6b',
        border: '#e5e5e5',
        subtle: '#f7f7f7',
      },
    },
  },
  plugins: [],
};

export default config;
