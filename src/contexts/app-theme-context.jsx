import { createContext, useEffect, useState } from "react";
import { createTheme, useTheme } from "@mui/material";

import { themeSettings, themeTokens } from "../theme/theme";

export const AppThemeContext = createContext()

const AppThemeProvider = ({ children }) => {
    const initialMode = 'dark'
    const materialTheme = useTheme()
    const [mode, setMode] = useState(initialMode)
    const [theme, setTheme] = useState(materialTheme)
    const [colors, setColors] = useState(themeTokens(initialMode))

    useEffect(() => {
        const appTheme = createTheme(themeSettings(mode))
        const colors = themeTokens(mode)
        setColors(colors)
        setTheme(appTheme)
    }, [mode])

    const toggleColorMode = () => {
        setMode(prev => prev === 'light' ? 'dark' : 'light')
    }

    const themeProps = {
        mode,
        theme,
        colors,
        toggleColorMode
    }

    return (
        <AppThemeContext.Provider value={themeProps}>
            {children}
        </AppThemeContext.Provider>
    )

} 

export default AppThemeProvider