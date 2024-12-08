import { RouterProvider } from 'react-router-dom'

import './App.css'
import { router } from './routes/Routes'
import AppThemeProvider from './contexts/app-theme-context.jsx'

function App() {

  return (
    <AppThemeProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </AppThemeProvider>
  )
}

export default App