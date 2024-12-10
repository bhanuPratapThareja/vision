import { useState } from 'react'
import { Card, CardContent, CardActions, Rating, useTheme, Typography, Button, Collapse } from "@mui/material"

export default function ProductCard({ item }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const theme = useTheme()
    const { product, stat } = item

    return (
        <Card sx={{
            backgroundColor: theme.palette.background.alt,
            borderRadius: "0.55rem"
        }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, fontWeight: 900, textTransform: 'capitalize' }}  color={theme.palette.secondary[300]} gutterBottom>
                    {product.category}
                </Typography>
                <Typography variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]} gutterBottom>
                    {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </Typography>
                <Rating value={product.rating} readOnly />
                <Typography variant="body2">{product.description}</Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="primary"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {isExpanded ? 'See Less' : 'See More'}
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    color: theme.palette.neutral[300]
                }}
            >
                <CardContent>
                    <Typography>Supply Left: {product.supply}</Typography>
                    <Typography>Yearly Sales This Year: {stat?.yearlySalesTotal}</Typography>
                    <Typography>Yearly Units Sold This Year: {stat?.yearlyTotalSoldUnits}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
