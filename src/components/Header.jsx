import { useContext } from 'react'
import { Box, IconButton, InputBase } from '@mui/material'
import { 
  LightModeOutlined, 
  DarkModeOutlined,
  Notifications,
  SettingsOutlined,
  PersonOutlined,
  SearchOutlined
} from '@mui/icons-material'

import { AppThemeContext } from '../contexts/app-theme-context'

export default function Header() {
  const { mode, colors, toggleColorMode } = useContext(AppThemeContext)
  console.log(colors)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', border: '2px solid red' }} p={2}>
      
      {/* Search Bar */}
      <Box display="flex" borderRadius={5} backgroundColor={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchOutlined />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={toggleColorMode}>
          {mode === 'dark' ? 
            <LightModeOutlined /> :
            <DarkModeOutlined />
          }
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>

    </Box>
  )
}
