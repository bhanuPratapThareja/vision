import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import PageHeading from '../shared/PageHeading'
import { useFetchCustomersQuery } from '../store'

export default function Customers() {
    const theme = useTheme()
    const { data, isLoading } = useFetchCustomersQuery()

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'name', headerName: 'Name', flex: 0.5 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'phoneNumber', headerName: 'Phone Number', flex: 0.5,
            renderCell: (params) => params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)-$2-$3")
        },
        { field: 'country', headerName: 'Country', flex: 0.4 },
        { field: 'occupation', headerName: 'Occupation', flex: 1 },
        { field: 'role', headerName: 'Role', flex: 0.5 },
    ]

    return (
        <Box m="20px">
            <PageHeading title="CUSTOMERS" subTitle="List of customers" />
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
                      color: theme.palette.secondary[200],
                      fontWeight: 600
                    },
                    "& .MuiDataGrid-columnHeader": {
                      borderBottom: "none",
                      backgroundColor: theme.palette.secondary[600]
                     
                    },
                    "& .MuiDataGrid-virtualScroller": {
                    //   backgroundColor: theme.palette.primary.light
                    },
                    "& .MuiDataGrid-footerContainer": {
                      borderTop: "none",
                      backgroundColor: theme.palette.secondary[600]
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                      color: theme.palette.secondary[100],
                    },
                  }}
            >
                <DataGrid 
                    rows={data?.customers || []}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}
