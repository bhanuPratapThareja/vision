import { useState } from 'react'
import { Box, Button, Toolbar, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

import DataGridCustomToolbar from '../components/DataGridCustomToolbar'
import PageHeading from '../shared/PageHeading'
import { useFetchTransactionsQuery } from '../store'

export default function Transactions() {
    const theme = useTheme()

    const [paginationModel, setPaginationModel] = useState({
        page: 0,
        pageSize: 20,
    });

    const [sort, setSort] = useState({})
    const [search, setSearch] = useState("")
    const [searchInput, setSearchInput] = useState("")

    const { data, isLoading } = useFetchTransactionsQuery({ 
        page: paginationModel.page, pageSize: paginationModel.pageSize, sort: JSON.stringify(sort), search 
    })
    
    console.log('data: ', data )

    const columns = [
        { field: 'id', headerName: 'Transaction ID', flex: 1 },
        { field: 'userId', headerName: 'User ID', flex: 1 },
        { field: 'createdAt', headerName: 'Created At', flex: 1,
            renderCell: (params) => new Intl.DateTimeFormat('hi-IN').format(new Date(params.row.createdAt))
        },
        { field: 'products', headerName: '# of Products', flex: 0.5, sortable: false,
            renderCell: (params) => {
                return params.value.length
            }
        },
        { field: 'cost', headerName: 'Cost', flex: 1,
            renderCell: (params) => {
                return (+params.row.cost).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            }
        }
    ]

    const checkValues = () => {
        console.log(page, pageSize, search)
    }

    const handlePaginationModelChange = (newPaginationModel) => {
        console.log('newPaginationModel: ', newPaginationModel)
        setPaginationModel(newPaginationModel);
    };

    const resetPaginationMaodel = () => {
        setPaginationModel({ page: 0 })
    }

    return (
        <Box m="20px">
            <PageHeading title="TRANSACTIONS" subTitle="List of transactions" />
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
                    loading={isLoading}
                    getRowId={row => row.id}
                    rows={data?.transactions || []}
                    columns={columns} 
                    pagination
                    paginationMode="server"
                    sortingMode='server'
                    rowCount={(data && data.total) || 0}
                    onPaginationModelChange={handlePaginationModelChange}
                    paginationModel={paginationModel}
                    pageSizeOptions={[20]}

                    onSortModelChange={newSortModel => setSort(...newSortModel)}
                    slots={{ toolbar: DataGridCustomToolbar }}
                    slotProps={{ toolbar: { searchInput, setSearchInput, setSearch, resetPaginationMaodel }}}
                />
            </Box>
            <Button color='danger' onClick={checkValues}>Check</Button>
        </Box>
    )
}
