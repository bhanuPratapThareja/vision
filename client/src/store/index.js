import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import themeReducer from './slices/theme-slice'
import userReducer from './slices/user-slice'

import { usersApi } from "./apis/usersApi";
import { clientsApi } from "./apis/clientsApi";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [clientsApi.reducerPath]: clientsApi.reducer
    },
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware()
                    .concat(usersApi.middleware)
                    .concat(clientsApi.middleware)
    }
})

setupListeners(store.dispatch)

export { themeActions } from './slices/theme-slice'
export { userActions } from './slices/user-slice'
export { useFetchUserQuery, useAddUserMutation, useDeleteUserMutation } from './apis/usersApi'
export { useFetchProductsQuery, useFetchCustomersQuery, useFetchTransactionsQuery, useFetchGeographyQuery } from './apis/clientsApi'
export default store