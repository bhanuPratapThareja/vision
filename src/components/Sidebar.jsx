import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { 
  Box, 
  Drawer, 
  Typography,
  Divider,
  IconButton,
} from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { MenuOutlined } from '@mui/icons-material';

import SidebarMenu from './SidebarMenu'
import { themeTokens } from '../theme/theme';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const drawerWidth = 240;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const colors = themeTokens(theme.palette.mode)
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('dashboard')

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        color="inherit"
        onClick={handleDrawerOpen}
        edge="start"
        sx={[
          {
            ml: 2,
            mr: 4,
            position: 'absolute',
            top: 16,
          },
          open && { display: 'none' },
        ]}
      >
        <MenuOutlined />
      </IconButton>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: colors.primary[600]
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} style={{ color: 'white'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' mb={4}>
            <AccountCircle sx={{ height: '100px', width: '100px', color: colors.secondary[500] }} />
            <Typography variant='h2' fontWeight={900} color={colors.secondary[500]}>User Admin</Typography>
            <Typography fontWeight={700} color={colors.secondary[500]}>Company</Typography>
        </Box>
       
       <Divider />

      <SidebarMenu
        colors={colors} 
        selected={selected}
        setSelected={setSelected} 
        setOpen={setOpen}
      />
      </Drawer>

      <Main open={open} sx={{ padding: 0 }}>
        <header>
          <Header sidebarOpen={open} />
        </header>
        <main>
          <Outlet />
        </main>
      </Main>

      
    </Box>
  );
}
