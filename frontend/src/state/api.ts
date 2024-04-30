import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import {
//   GetKpisResponse,
//   GetProductsResponse,
//   GetTransactionsResponse,
// } from "./types";
console.log("import.meta.env.VITE_BASE_URL:", import.meta.env.VITE_BASE_URL);

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337" }),

  reducerPath: "main",
  tagTypes: ["Kpis"],

  endpoints: (build) => ({
    getKpis: build.query<void, void>({
      query: () => "kpi/kpis/",
      providesTags: ["Kpis"],
    }),

    // getKpis: build.query<Array<GetKpisResponse>, void>({
    //   query: () => "kpi/kpis/",
    //   providesTags: ["Kpis"],
    // }),
    // getProducts: build.query<Array<GetProductsResponse>, void>({
    //   query: () => "product/products/",
    //   providesTags: ["Products"],
    // }),
    // getTransactions: build.query<Array<GetTransactionsResponse>, void>({
    //   query: () => "transaction/transactions/",
    //   providesTags: ["Transactions"],
    // }),
  }),
});

export const { useGetKpisQuery } = api;
// export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
//   api;
