import { Box, Typography, useTheme, Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import PageHeading from '../shared/PageHeading'
import { themeTokens } from '../theme/theme'
import { mockDataInvoices } from '../data/mockData'

export default function Invoices() {
  const theme = useTheme()
  const colors = themeTokens(theme.palette.mode)

  const rowSelectionHandler = ids => {
    console.log('ids: ', ids)
    // const selectedRowsData = mockDataInvoices.filter(item => ids.includes(item.id))
    // console.log('selectedRowsData: ', selectedRowsData)
  }

  const columns = [
    { field: 'id', headerName: 'ID',  headerAlign: 'center', align: 'center', },
    { field: 'name', headerName: 'Name', flex: 1,  cellClassName: 'name-column--cell' },
    { field: 'email', headerName: 'Email', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'cost', headerName: 'Cost', headerAlign: 'center', align: 'center', 
      renderCell: (params) => {
        const cost = +params.row.cost
        return (
          <Typography color={colors.secondary[500]} mt={1.8}>
            {cost.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}
          </Typography>
        )
      }
    },
    { field: 'phone', headerName: 'Phone Number', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'date', headerName: 'Date', flex: 1, headerAlign: 'center', align: 'center' },
  ]

  return (
    <Box m="20px">
      <PageHeading title="INVOICES" subTitle="List of Invoice Balances" />

      <Box 
        m="40px 0 0 0"
        // height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none"
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none" 
          },
          "& .name-column--cell": {
            color: colors.secondary[200],
            fontWeight: 600
          },
          "& .MuiDataGrid-columnHeader": {
            borderBottom: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[900],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]}`,
          },
          "& .MuiCheckbox-colorPrimary": {
            color: `${colors.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid 
          rows={mockDataInvoices} 
          columns={columns} 
          checkboxSelection
          onRowSelectionModelChange={ids => console.log(ids)}
        />
      </Box>

      <Box display="flex" justifyContent="flex-end">
        <Button 
          variant="contained"
          sx={{ marginTop: '10px', backgroundColor: colors.blueAccent[400] }}>
            Get Selected Rows
        </Button>
      </Box>
    </Box>
  )
}
