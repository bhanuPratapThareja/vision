import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        mode: 'dark'
    },
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark'
        }
    }
})

export const themeActions = themeSlice.actions
export default themeSlice.reducer