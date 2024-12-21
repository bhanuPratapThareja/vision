import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material'

import PageHeading from '../shared/PageHeading'
import { useFetchProductsQuery } from '../store'
import ProductCard from '../components/ProductCard'

export default function Product() {
  const theme = useTheme()
  const isNonMobile = useMediaQuery("(min-width: 1000px)")
  const { data, isLoading, isError } = useFetchProductsQuery()

  const columns = [
    { field: 'id', headerName: 'ID',  headerAlign: 'center', align: 'center', headerClassName: 'mui-table-header' },
    { field: 'name', headerName: 'Name', flex: 1,  cellClassName: 'name-column--cell', headerClassName: 'mui-table-header' },
    { field: 'age', headerName: 'Age', type: 'number',  headerClassName: 'mui-table-header' },
    { field: 'phone', headerName: 'Phone Number', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'mui-table-header' },
    { field: 'email', headerName: 'Email', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'mui-table-header' },
    { field: 'access', headerName: 'Access Level', flex: 1, headerAlign: 'center', align: 'center', headerClassName: 'mui-table-header',
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          minWidth="100px"
          m="10px auto"
          p="5px 20px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="2px"
          backgroundColor={
            access === "admin" ?
            colors.secondary[600] :
            colors.secondary[700]
          }
        >
          {access === "admin" && <AdminPanelSettingsOutlined />}
          {access === "manager" && <SecurityOutlined />}
          {access === "user" && <LockOpenOutlined />}
          <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
            {access.toUpperCase()}
          </Typography>
        </Box>
      )
    },
  ]

  let content;

  if(isLoading) {
    content = <p>Loading...</p>
  } else if(isError) {
    console.log('error loading')
    content = <p>Error loading data</p>
  } else {
    content = (
        <Box
            mt={2}
            display="grid"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            justifyContent="space-between"
            rowGap={2}
            columnGap="1.33%"
            sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
            }}
        >
            {data.productsWithStats.map((item, i) => <ProductCard key={i} item={item} />)}
        </Box>
    )
  }

  return (
    <Box m="20px">
        <PageHeading title="PRODUCTS" subTitle="See your list of products" />
        {content}
    </Box>
  )
}
