import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const usersApi = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({
       baseUrl: import.meta.env.VITE_BASE_URL,
       fetchFn: async (...args) => {
        // console.log('args: ', args)
            return fetch(...args)
        } 
    }),
    endpoints(builder) {
        return {
            fetchUser: builder.query({
                providesTags: ['User'],
                query: (userId) => {
                    return {
                        url: '/api/general/user/' + userId,
                        method: 'GET'
                    }
                }
            }),
            addUser: builder.mutation({
                invalidatesTags: ['User'],
                query: user => {
                    return {
                        url: '/api/general/user',
                        method: 'POST',
                        body: { user }
                    }
                }
            }),
            deleteUser: builder.mutation({
                invalidatesTags: ['User'],
                query: (userId) => {
                    return {
                        url: '/api/general/user/' + userId,
                        method: 'DELETE'
                    }
                },
                queryFn: async (...args) => {
                    console.log('args:: ', args)
                }
            })
        }
    }
})

export const { useFetchUserQuery, useAddUserMutation, useDeleteUserMutation } = usersApi
export { usersApi }