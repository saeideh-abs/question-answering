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
        },
        common: {
          black: '#222222'
        }
      },
      boxShadow: {
        qa: '0px 0px 1px 0px rgba(12,26,75,0.24), 0px 3px 8px -1px rgba(50,50,71,0.05)',
      }
    },
  },
  plugins: [],
}
export default config
