'use client'
import {
  createTheme,
  PaletteColorOptions,
  StyledEngineProvider,
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
    secondary: twTheme?.colors?.secondary as PaletteColorOptions,
  },
})

export const MuiThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledEngineProvider injectFirst={false}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}
