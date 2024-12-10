import { Box, useTheme } from '@mui/material'

import PageHeading from '../shared/PageHeading'

export default function Customers() {
    const theme = useTheme()

    return (
        <Box m="20px">
        <PageHeading title="CUSTOMERS" subTitle="List of your customers" />
        </Box>
    )
}
