import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import {
    Person2Outlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    PieChartOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
  } from '@mui/icons-material'
  import { themeTokens } from "../theme/theme";

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
            path: '/invoices',
            icon: <ReceiptLongOutlined />
        },
        {
            title: 'Geograpy',
            path: '/invoices',
            icon: <PublicOutlined />
        },
        {
            kind: 'header',
            title: 'Sales',
        },
        {
            title: 'Overview',
            path: '/form',
            icon: <PointOfSaleOutlined />
        },
        {
            title: 'Daily',
            path: '/calendar',
            icon: <TodayOutlined />
        },
        {
            title: 'Monthly',
            path: '/faq',
            icon: <CalendarMonthOutlined />
        },
        {
            title: 'Breakdown',
            path: '/faq',
            icon: <PieChartOutlined />
        },
        {
            kind: 'header',
            title: 'Management',
        },
        {
            title: 'Admin',
            path: '/bar',
            icon: <AdminPanelSettingsOutlined />
        },
        {
            title: 'Performance',
            path: '/pie',
            icon: <TrendingUpOutlined />
        },
        {
            kind: 'header',
            title: 'Administration',
        },
        {
            title: 'Team',
            path: '/team',
            icon: <Person2Outlined />
        },
        {
            title: 'Contacts',
            path: '/contacts',
            icon: <Groups2Outlined />
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
