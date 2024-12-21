import { Box, IconButton, TextField, InputBase } from '@mui/material'
import { Search, SearchTwoTone } from "@mui/icons-material"
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton
} from '@mui/x-data-grid'

export default function DataGridCustomToolbar({ searchInput, setSearchInput, setSearch, resetPaginationMaodel }) {
  return (
    <GridToolbarContainer>
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
            <Box>
                <GridToolbarColumnsButton />
                <GridToolbarDensitySelector />
                <GridToolbarExport />
            </Box>
            <Box>
                {/* <TextField
                    label="Search..."
                    sx={{ mb: "0.5rem", width: "15rem" }}
                    onChange={e => setSearchInput(e.target.value)}
                    value={searchInput}
                /> */}
                <Box display="flex" border="1px solid grey" mb='8px'  borderRadius="4px">
                    <InputBase value={searchInput} onChange={e => {
                        setSearchInput(e.target.value)
                        // resetPaginationMaodel()
                    }} sx={{ ml: 2, flex: 1, minWidth: '100px', borderRadius: '8px'}} placeholder='Search Transactions' />
                    <IconButton type='button' sx={{ p: 1 }} onClick={() => setSearch(searchInput)}>
                        <SearchTwoTone />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    </GridToolbarContainer>
  )
}
