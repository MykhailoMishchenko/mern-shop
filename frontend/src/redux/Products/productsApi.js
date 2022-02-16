import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
  reducerPath: "products",
  tagTypes: ["femaleProducts", "maleProducts", "productsById", "allFemaleProducts", "allMaleProducts", "allSaleProducts","topProducts"],
  baseQuery: fetchBaseQuery({baseUrl: "/api/products"}),
  endpoints: (build) => ({
    getFemaleProducts: build.query({
      query: () => "/limit-women",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'femaleProducts', id })),
            { type: 'femaleProducts', id: 'LIST' },
          ]
          : [{ type: 'femaleProducts', id: 'LIST' }],
    }),
    getMaleProducts: build.query({
      query: () => "/limit-men",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'maleProducts', id })),
            { type: 'maleProducts', id: 'LIST' },
          ]
          : [{ type: 'maleProducts', id: 'LIST' }],
    }),
    allFemaleProducts: build.query({
      query: () => "/women",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'allFemaleProducts', id })),
            { type: 'allFemaleProducts', id: 'LIST' },
          ]
          : [{ type: 'allFemaleProducts', id: 'LIST' }],
    }),
    allMaleProducts: build.query({
      query: () => "/men",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'allMaleProducts', id })),
            { type: 'allMaleProducts', id: 'LIST' },
          ]
          : [{ type: 'allMaleProducts', id: 'LIST' }],
    }),
    allSaleProducts: build.query({
      query: () => "/sale",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'allSaleProducts', id })),
            { type: 'allSaleProducts', id: 'LIST' },
          ]
          : [{ type: 'allSaleProducts', id: 'LIST' }],
    }),
    allTopProducts: build.query({
      query: () => "/top",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'topProducts', id })),
            { type: 'topProducts', id: 'LIST' },
          ]
          : [{ type: 'topProducts', id: 'LIST' }],
    }),
    getProductsById: build.query({
      query: (id) => `/${id}`
    })
  })
})

export const {
  useGetFemaleProductsQuery, useGetMaleProductsQuery,
  useGetProductsByIdQuery, useAllFemaleProductsQuery,
  useAllMaleProductsQuery, useAllSaleProductsQuery, useAllTopProductsQuery
} = productsApi;