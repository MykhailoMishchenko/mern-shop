import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const getOrderById = createApi({
  reducerPath: "getOrder",
  tagTypes: ["order"],
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
    getOrder: build.query({
      query: (id) => `/${id}`
    })
  })
});

export const {
  useGetOrderQuery
} = getOrderById;