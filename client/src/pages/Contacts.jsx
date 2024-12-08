import { Box, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

import PageHeading from '../shared/PageHeading'
import { themeTokens } from '../theme/theme'
import { mockDataContacts } from '../data/mockData'

export default function Contacts() {
  const theme = useTheme()
  const colors = themeTokens(theme.palette.mode)

  const columns = [
    { field: 'id', headerName: 'ID',  headerAlign: 'center', align: 'center', },
    { field: 'name', headerName: 'Name', flex: 1,  cellClassName: 'name-column--cell' },
    { field: 'age', headerName: 'Age', headerAlign: 'center', align: 'center' },
    { field: 'phone', headerName: 'Phone Number', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'email', headerName: 'Email', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'registrarId', headerName: 'Registrar Id', flex: 1, headerAlign: 'center', align: 'center'},
    { field: 'address', headerName: 'Address', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'city', headerName: 'City', flex: 1, headerAlign: 'center', align: 'center' },
    { field: 'zipCode', headerName: 'Zip Code', flex: 1, headerAlign: 'center', align: 'center' },
    
  ]

  return (
    <Box m="20px">
      <PageHeading title="CONTACTS" subTitle="List of your contacts for future refernce" />
      <Box 
        m="40px 0 0 0"
        height="75vh"
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
        }}
      >
        <DataGrid 
          rows={mockDataContacts} 
          columns={columns} 
          slots={{ toolbar: GridToolbar }}
          initialState={{
            pagination: {
                paginationModel: {
                    pageSize: 10,
                },
            },
          }}
        />
      </Box>
    </Box>
  )
}
