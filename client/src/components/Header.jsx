import { Box, IconButton, InputBase } from '@mui/material'
import { 
  LightModeOutlined, 
  DarkModeOutlined,
  Notifications,
  SettingsOutlined,
  PersonOutlined,
  SearchTwoTone,
} from '@mui/icons-material'

import { useSelector, useDispatch } from 'react-redux'
import { themeActions } from '../store'

export default function Header(props) {
  // const { mode, colors, toggleColorMode } = useContext(AppThemeContext)
  const dispatch = useDispatch()
  const { mode } = useSelector(state => state.theme)

  return (
    <header>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }} p={2}>
        
        {/* Search Bar */}
        {/* <Box display="flex" borderRadius={2} border="1px solid grey" ml={props.sidebarOpen ? 0 : 6} >
          <InputBase sx={{ ml: 2, flex: 1, minWidth: '100px'  }} placeholder='Search' />
          <IconButton type='button' sx={{ p: 1 }}>
            <SearchTwoTone />
          </IconButton>
        </Box> */}
        <Box></Box>

        {/* Icons */}
        <Box display="flex">
          <IconButton onClick={() => dispatch(themeActions.toggleMode())}>
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
    </header>
  )
}
