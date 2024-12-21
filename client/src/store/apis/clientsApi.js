import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const clientsApi = createApi({
    reducerPath: 'clients',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query({
                providesTags: ['Products'],
                query: () => {
                    return {
                        url: '/api/client/products',
                        method: 'GET'
                    }
                }
            }),
            fetchCustomers: builder.query({
                providesTags: ['Customers'],
                query: () => {
                    return {
                        url: '/api/client/customers',
                        method: 'GET'
                    }
                }
            }),
            fetchTransactions: builder.query({
                providesTags: ['Transactions'],
                query: ({ page, pageSize, sort, search }) => {
                    return {
                        url: '/api/client/transactions',
                        method: 'GET',
                        params: { page, pageSize, sort, search }
                    }
                }
            }),
            fetchGeography: builder.query({
                providesTags: ['Geography'],
                query: () => {
                    return {
                        url: '/api/client/geography',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export const { 
    useFetchProductsQuery, 
    useFetchCustomersQuery, 
    useFetchTransactionsQuery,
    useFetchGeographyQuery
} = clientsApi
export { clientsApi }