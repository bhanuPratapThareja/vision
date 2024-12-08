import { Box, useTheme } from "@mui/material";

import { themeTokens } from '../theme/theme'

export default function ProgressCircle({ progress='0.75', size='40px' }) {
    const theme = useTheme()
    const colors = themeTokens(theme.palette.mode)
    const angle = progress * 360

    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                    conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                    ${colors.secondary[500]}`,
                    borderRadius: "50%",
                    width: size,
                    height: size,
            }}
        />
    )
}
