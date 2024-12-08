import { useContext } from 'react'
import { CssBaseline, ThemeProvider as MaterialThemProvider  } from '@mui/material'

import Sidebar from '../components/Sidebar'
import { AppThemeContext } from '../contexts/app-theme-context'

export default function RootLayout() {
  const { theme } = useContext(AppThemeContext)

  return (
        <MaterialThemProvider theme={theme}>
          <CssBaseline />

          {/* <header>
            <Header />
          </header> */}

          <nav>
            <Sidebar />
          </nav>

          {/* <main>
            <Outlet />
          </main> */}
          
        </MaterialThemProvider>
  )
}
