import { Box, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material'

import PageHeading from '../shared/PageHeading'
import { themeTokens } from '../theme/theme'
import { mockDataTeam } from '../data/mockData'

export default function Team() {
  const theme = useTheme()
  const colors = themeTokens(theme.palette.mode)

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

  return (
    <Box m="20px">
      <PageHeading title="TEAM" subTitle="Managing the Team Members" />
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
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[900],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  )
}
