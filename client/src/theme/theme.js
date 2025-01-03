function reverseTokens(darkThemeTokens) {
    const reversedTokens = {}
    Object.entries(darkThemeTokens).forEach(([key, val]) => {
        const keys = Object.keys(val)
        const values = Object.values(val)
        const length = keys.length
        const reversedObj = {}
        for(let i = 0; i < length; i++) {
            reversedObj[keys[i]] = values[length - i - 1]
        }
        reversedTokens[key] = reversedObj
    })
    return reversedTokens
}

const tokensDark = {
    grey: {
        0: "#ffffff",
        10: "#f6f6f6",
        50: "#f0f0f0",
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000",
    }, primary: {
       100: "#d0d1d5",
       200: "#a1a4ab",
       300: "#727681",
       400: "#434957",
       500: "#141b2d",
       600: "#101624",
       700: "#0c101b",
       800: "#080b12",
       900: "#040509"
    }, secondary: {
       100: "#dbf5ee",
       200: "#b7ebde",
       300: "#94e2cd",
       400: "#70d8bd",
       500: "#4cceac",
       600: "#3da58a",
       700: "#2e7c67",
       800: "#1e5245",
       900: "#0f2922"
    }, redAccent: {
       100: "#f8dcdb",
       200: "#f1b9b7",
       300: "#e99592",
       400: "#e2726e",
       500: "#db4f4a",
       600: "#af3f3b",
       700: "#832f2c",
       800: "#58201e",
       900: "#2c100f"
    }, blueAccent: {
       100: "#e1e2fe",
       200: "#c3c6fd",
       300: "#a4a9fc",
       400: "#868dfb",
       500: "#6870fa",
       600: "#535ac8",
       700: "#3e4396",
       800: "#2a2d64",
       900: "#151632"
    }
}

const tokensLight = reverseTokens(tokensDark)

// export const themeTokens = mode => {
//     return mode === 'dark' ? darkModeColors : lightModeColors
// }

export const themeTokens = mode => ({
    ...(mode === 'dark' ? tokensDark : tokensLight)
})

export const themeSettings = mode => {
    const newThemePalette =  {
        palette: {
            mode,
            ...(mode === 'dark' ? 
            {
                primary: { 
                    ...tokensDark.primary,
                    main: tokensDark.primary[400],
                    light: tokensDark.primary[400],
                },
                secondary: { 
                    ...tokensDark.secondary,
                    main: tokensDark.secondary[300] 
                },
                neutral: {
                    ...tokensDark.grey,
                    light: tokensDark.grey[100],
                    main: tokensDark.grey[500],
                    dark: tokensDark.grey[700],
                },
                background: { 
                    default: tokensDark.primary[600],
                    alt: tokensDark.primary[500],
                }
            } : 
            {
                primary: { 
                    ...tokensLight.primary,
                    main: tokensLight.grey[50],
                    light: tokensLight.grey[100],
                },
                secondary: { 
                    ...tokensLight.secondary,
                    main: tokensDark.secondary[600],
                    light: tokensDark.secondary[700],
                },
                neutral: {
                    ...tokensLight.grey,
                    main: tokensLight.grey[500],
                },
                background: { 
                    default: tokensDark.grey[0] ,
                    alt: tokensDark.grey[50] ,
                }
            }),
        },
        typography: {
            fontFamily: ['Inter', 'sans-serif'].join(','),
            fontSize: 12,
            h1: {
                fontFamily:  ['Inter', 'sans-serif'].join(','),
                fontSize: 40
            },
            h2: {
                fontFamily:  ['Inter', 'sans-serif'].join(','),
                fontSize: 32
            },
            h3: {
                fontFamily:  ['Inter', 'sans-serif'].join(','),
                fontSize: 24
            },
            h4: {
                fontFamily:  ['Inter', 'sans-serif'].join(','),
                fontSize: 20
            },
            h5: {
                fontFamily:  ['Inter', 'sans-serif'].join(','),
                fontSize: 16
            },
            h6: {
                fontFamily:  ['Inter', 'sans-serif'].join(','),
                fontSize: 14
            },
        }
    }
    return newThemePalette
}