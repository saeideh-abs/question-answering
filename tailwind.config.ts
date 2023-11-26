import type { Config } from 'tailwindcss'

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          main: '#27AE60',
          contrastText: '#fff',
        },
        'secondary': {
          'lightest': '#F7F8F9',
          'more-light': '#9CAEBB',
          'so-light': '#E4E9EC',
        },
        gray: {
          lightest: '#F9F9F9',
          dark: '#777777',
          darker: '#454545',
        }
      }
    },
  },
  plugins: [],
}
export default config
