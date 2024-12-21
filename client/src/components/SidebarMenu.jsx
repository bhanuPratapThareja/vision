import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import {
    Person2Outlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    CalendarMonthOutlined,
    PieChartOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    BarChartOutlined
  } from '@mui/icons-material'

export default function SidebarMenu(props) {
    const theme = useTheme();

    const location = useLocation()
    const menuItems = [
        {
            title: 'Dashboard',
            path: '/',
            icon: <HomeOutlined />
        },
        {
            kind: 'header',
            title: 'Client Facing',
        },
        {
            title: 'Products',
            path: '/products',
            icon: <ShoppingCartOutlined />
        },
        {
            title: 'Customers',
            path: '/customers',
            icon: <Groups2Outlined />
        },
        {
            title: 'Transactions',
            path: '/transactions',
            icon: <ReceiptLongOutlined />
        },
        {
            title: 'Geograpy',
            path: '/geography',
            icon: <PublicOutlined />
        },


        {
            kind: 'header',
            title: 'Pages',
        },
        {
            title: 'Profile Form',
            path: '/form',
            icon: <Person2Outlined />
        },
        {
            title: 'Calendar',
            path: '/calendar',
            icon: <CalendarMonthOutlined />
        },
        {
            title: 'Faq Page',
            path: '/faq',
            icon: <AdminPanelSettingsOutlined />
        },
        
        {
            kind: 'header',
            title: 'Charts',
        },
        {
            title: 'Bar Chart',
            path: '/bar',
            icon: <BarChartOutlined />
        },
        {
            title: 'Pie Chart',
            path: '/pie',
            icon: <PieChartOutlined />
        },
        {
            title: 'Line Chart',
            path: '/line',
            icon: <TrendingUpOutlined />
        },
    ]

    const onMenuSelection = path => {
        props.setSelected(path)
        // props.setOpen(false)
    }

    return (
        <List disablePadding>
            {menuItems.map(item => {
                if(item.kind && item.kind === 'header') {
                    return (
                        <Typography 
                            key={item.title} 
                            variant='h6' 
                            color={'white'}
                            sx={{ m: '15px 0 5px 20px'}}>
                                {item.title}
                        </Typography>
                    )
                }
                return (
                    <Link 
                        key={item.title} 
                        to={item.path}  
                        onClick={() => onMenuSelection(item.path)}
                        style={{ textDecoration: 'none' }}
                    >
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon sx={{ color: location.pathname === item.path ? theme.palette.secondary[600] : 'white' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} sx={{ 
                                    color: location.pathname === item.path ? theme.palette.secondary[600] : 'white' }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    )
}
