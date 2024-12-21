import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '../layouts/RootLayout'
import Dashboard from '../pages/Dashboard'

import Products from '../pages/Products'
import Customers from '../pages/Customers'

import Transactions from '../pages/Transactions'
import Bar from '../pages/Bar'
import Pie from '../pages/Pie'
import Line from '../pages/Line'
import Geography from '../pages/Geography'
import FAQ from '../pages/FAQ'
import Calendar from '../pages/Calendar'
import Form from '../pages/Form'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: '/products', element: <Products /> },
            { path: '/customers', element: <Customers /> },
            { path: '/transactions', element: <Transactions /> },
            { path: '/geography', element: <Geography /> },
            { path: '/form', element: <Form /> },
            { path: '/calendar', element: <Calendar /> },
            { path: '/faq', element: <FAQ /> },
            { path: '/bar', element: <Bar /> },
            { path: '/pie', element: <Pie /> },
            { path: '/line', element: <Line /> },
        ]
    }
])