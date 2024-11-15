import { useContext } from 'react'
import { CssBaseline, ThemeProvider as MaterialThemProvider  } from '@mui/material'

import Header from '../components/Header'
import { AppThemeContext } from '../contexts/app-theme-context'

export default function RootLayout() {
  const { theme } = useContext(AppThemeContext)
  return (
        <MaterialThemProvider theme={theme}>
          <CssBaseline />
          <main className='content'>
            <Header />
          </main>
        </MaterialThemProvider>
  )
}
