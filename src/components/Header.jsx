import { useContext } from 'react'
import { Box, IconButton, InputBase } from '@mui/material'
import { 
  LightModeOutlined, 
  DarkModeOutlined,
  Notifications,
  SettingsOutlined,
  PersonOutlined,
  SearchTwoTone
} from '@mui/icons-material'

import { AppThemeContext } from '../contexts/app-theme-context'

export default function Header({ sidebarOpen }) {
  const { mode, colors, toggleColorMode } = useContext(AppThemeContext)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }} p={2}>
      
      {/* Search Bar */}
      <Box display="flex" borderRadius={2} border="1px solid grey" ml={sidebarOpen ? 0 : 6} backgroundColor={colors.primary[900]}>
        <InputBase sx={{ ml: 2, flex: 1, minWidth: '100px'  }} placeholder='Search' />
        <IconButton type='button' sx={{ p: 1 }}>
          <SearchTwoTone />
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
