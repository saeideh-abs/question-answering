'use client'
import {
  createTheme,
  PaletteColorOptions,
  ThemeProvider,
} from '@mui/material/styles'
import twTheme from '@/tailwind-theme'
import { PropsWithChildren } from 'react'
import { iranYekan } from '@/styles/fonts'

export const theme = createTheme({
  typography: {
    fontFamily: [iranYekan.style.fontFamily].join(','),
  },
  palette: {
    primary: twTheme?.colors?.primary as PaletteColorOptions,
  },
})

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
