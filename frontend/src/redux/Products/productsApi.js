import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const productsApi = createApi({
  reducerPath: "products",
  tagTypes: ["femaleProducts", "maleProducts", "productsById"],
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
    getProductsById: build.query({
      query: (id) => `/${id}`
    })
  })
})

export const {useGetFemaleProductsQuery, useGetMaleProductsQuery, useGetProductsByIdQuery} = productsApi;