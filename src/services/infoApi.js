import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const infoApi = createApi({
  reducerPath: "infoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (builder) => ({
    getInfos: builder.query({
      query: () => "clients",
    }),
  }),
});

export const { useGetInfosQuery } = infoApi;
