import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { CssBaseline, ThemeProvider, createTheme  } from '@mui/material'

import Sidebar from '../components/Sidebar'

import { themeSettings } from '../theme/theme'
import { useFetchUserQuery } from '../store'

export default function RootLayout() {
  let userId;
  const { mode } = useSelector(state => state.theme)
  // const { userId } = useSelector(state => state.user)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  const { data } = useFetchUserQuery('userId', {
   
  })
  console.log('rootlayout re render fetch: ', data)

  return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Sidebar user={data?.user} />
        </ThemeProvider>
  )
}
