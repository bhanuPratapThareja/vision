import { Box, Typography, useTheme } from "@mui/material";

import ProgressCircle from "./ProgressCircle";
import { themeTokens } from '../theme/theme'

export default function StatBox({ title, subTitle, icon, progress, increase }) {
    const theme = useTheme()
    const colors = themeTokens(theme.palette.mode)

    return (
        <Box width="100%">
            
            <Box display="flex" justifyContent="space-between" flexWrap="wrap">

                <Box>
                    {icon}
                    <Typography variant="h4" fontWeight="bold" sx={{ color: 'white' }}>
                        {title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: colors.secondary[500] }}>
                        {subTitle}
                    </Typography>
                </Box>

                <Box display="flex" flexDirection="column" justifyContent="space-between">
                    <ProgressCircle progress={progress} />

                    <Box>
                        <Typography variant="h5" fontStyle="italics" sx={{ color: colors.secondary[600] }}>
                            {increase}
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
