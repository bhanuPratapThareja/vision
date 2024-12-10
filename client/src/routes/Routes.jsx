import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import Dashboard from '../pages/Dashboard'

import Products from '../pages/Products'
import Customers from '../pages/Customers'

import Team from '../pages/Team'
import Contacts from '../pages/Contacts'

import Invoices from '../pages/Invoices'
import Form from '../pages/Form'
import Bar from '../pages/Bar'
import Pie from '../pages/Pie'
import Line from '../pages/Line'
import Geography from '../pages/Geography'
import FAQ from '../pages/FAQ'
import Calendar from '../pages/Calendar'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/products', element: <Products /> },
            { path: '/customers', element: <Customers /> },
            { path: '/team', element: <Team /> },
            { path: '/contacts', element: <Contacts /> },
            { path: '/invoices', element: <Invoices /> },
            { path: '/form', element: <Form /> },
            { path: '/bar', element: <Bar /> },
            { path: '/pie', element: <Pie /> },
            { path: '/line', element: <Line /> },
            { path: '/geography', element: <Geography /> },
            { path: '/faq', element: <FAQ /> },
            { path: '/calendar', element: <Calendar /> },
        ]
    }
])