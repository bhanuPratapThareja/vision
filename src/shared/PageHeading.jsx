import { Typography, Box, useTheme } from "@mui/material"
import { themeTokens } from "../theme/theme"

export default function PageHeading({ title, subTitle }) {
    const theme = useTheme()
    const colors = themeTokens(theme.palette.mode)

    return (
        <Box>
            <Typography 
                variant="h2" 
                color={colors.grey[100]} 
                fontWeight="bold"
                sx={{ mb: '5px' }}>
                    {title}
            </Typography>
            <Typography variant="h5" color={colors.secondary[300]} fontWeight={600}>
                {subTitle}
            </Typography>
        </Box>
    )
}
