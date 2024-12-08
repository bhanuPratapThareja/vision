import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material'
import {
    HomeOutlined,
    PeopleOutlined,
    ContactsOutlined,
    ReceiptOutlined,
    PersonOutlined,
    CalendarTodayOutlined,
    HelpOutlineOutlined,
    BarChartOutlined,
    PieChartOutlineOutlined,
    TimelineOutlined,
    MenuOutlined,
    MapOutlined,
  } from '@mui/icons-material'
  import { themeTokens } from "../theme/theme";

export default function SidebarMenu(props) {
    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode);

    const location = useLocation()
    const menuItems = [
        {
            title: 'Dashboard',
            path: '/',
            icon: <HomeOutlined />
        },
        {
            kind: 'header',
            title: 'Main items',
        },
        {
            title: 'Manage Team',
            path: '/team',
            icon: <PeopleOutlined />
        },
        {
            title: 'Contacts Information',
            path: '/contacts',
            icon: <ContactsOutlined />
        },
        {
            title: 'Invoices Balances',
            path: '/invoices',
            icon: <ReceiptOutlined />
        },
        {
            kind: 'header',
            title: 'Pages',
        },
        {
            title: 'Profile Form',
            path: '/form',
            icon: <PersonOutlined />
        },
        {
            title: 'Calendar',
            path: '/calendar',
            icon: <CalendarTodayOutlined />
        },
        {
            title: 'FAQ Page',
            path: '/faq',
            icon: <HelpOutlineOutlined />
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
            icon: <PieChartOutlineOutlined />
        },
        {
            title: 'Line Chart',
            path: '/line',
            icon: <TimelineOutlined />
        },
        {
            title: 'Geography Chart',
            path: '/geography',
            icon: <MapOutlined />
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
                        style={{ textDecoration: 'none'  }}
                    >
                        <ListItem>
                            <ListItemButton>
                                <ListItemIcon style={{ color: 'white' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.title} style={{ color: location.pathname === item.path ? colors.blueAccent[500] : '#FFF' }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                )
            })}
        </List>
    )
}
