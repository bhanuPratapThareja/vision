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
            })
        }
    }
})

export const { useFetchProductsQuery } = clientsApi
export { clientsApi }