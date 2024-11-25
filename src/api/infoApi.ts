import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const infoApi = createApi({
  reducerPath: "infoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gateway.scan-interfax.ru" }),
  endpoints: (build) => ({
    getInfo: build.mutation({
      query: (body) => ({
        url: "/api/v1/account/info",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application / json",
        },
        body: JSON.stringify(body),
      }),
    }),
  }),
});

export const { useGetInfoMutation } = infoApi;
