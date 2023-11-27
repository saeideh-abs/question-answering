import type { Config } from 'tailwindcss'
import { iranYekan } from './styles/fonts'

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
      height: {
        header: '68px',
      },
      margin: {
        header: '68px',
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      boxShadow: {
        qa: '0px 0px 1px 0px rgba(12,26,75,0.24), 0px 3px 8px -1px rgba(50,50,71,0.05)',
      },
      colors: {
        'primary': {
          main: '#27AE60',
          contrastText: '#fff',
        },
        'secondary': {
          'lightest': '#F7F8F9',
          'more-light': '#9CAEBB',
          'so-light': '#E4E9EC',
          'main': '#E4E9EC',
          contrastText: '#777777',
        },
        gray: {
          light: '#EEEEEE',
          lightest: '#F9F9F9',
          dark: '#777777',
          darker: '#454545',
          main: '#AAAAAA',
        },
        common: {
          black: '#222222'
        },
        annotation: {
          error: '#F16063',
          success: '#66CB9F'
        }
      },
    },
  },
  plugins: [],
}
export default config
