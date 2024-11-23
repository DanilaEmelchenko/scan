import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gateway.scan-interfax.ru" }),
  endpoints: (build) => ({
    postAuthorization: build.mutation({
      query: (body) => ({
        url: "/api/v1/account/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application / json",
        },
        body: JSON.stringify(body),
      }),
    }),
  }),
});

export const { usePostAuthorizationMutation } = authApi;
