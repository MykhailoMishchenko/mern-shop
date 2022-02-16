import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const getOrdersApi = createApi({
  reducerPath: "getOrders",
  tagTypes: ["myOrders"],
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/orders",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().login.credentials.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (build) => ({
    getMyOrders: build.query({
      query: () => "/my-orders",
      providesTags: (result) =>
        result
          ? [
            ...result.map(({ id }) => ({ type: 'myOrders', id })),
            { type: 'myOrders', id: 'LIST' },
          ]
          : [{ type: 'myOrders', id: 'LIST' }],
    })
  })
})

export const {
  useGetMyOrdersQuery
} = getOrdersApi;