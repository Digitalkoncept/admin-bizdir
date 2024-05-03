import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/auth/api",
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ email, password }) => ({
                url: "/login",
                method: "POST",
                body: {
                    email,
                    password,
                },
            }),
        }),
        // getAuthData: builder.query({
        //     query: ({ token }) => ({
        //         url: "api/auth-details",
        //         method: "GET",
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //     }),
        // }),
    }),
});

export const { useLoginMutation } = authApi;
