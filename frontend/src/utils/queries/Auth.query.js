import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const backendURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;
export const AuthApi = createApi({
  reducerPath: "AuthApi",
  baseQuery: fetchBaseQuery({
    baseUrl: backendURL,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (obj) => ({
        url: "/auth/register",
        method: "POST",
        body: obj,
      }),
    }),
    loginUser: builder.mutation({
      query: (obj) => ({
        url: "/auth/login",
        method: "POST",
        body: obj,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useRegisterUserMutation, useLoginUserMutation } = AuthApi;
export default AuthApi;
