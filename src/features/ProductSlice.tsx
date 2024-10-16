import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import addEditProduct from '../components/AddEditProduct';
import { Product } from '../model/Product.Model';
export const studentApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://digi-med-backend.onrender.com' }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({    //<any , void>  1ist arg show response type of API, 2nd Args shows the type of value passed on below line in  () of "query: () => '/crud',"  just below.
      query: () => 'patient/getProducts',
      providesTags:["Product"]
    }),
    getProduct: builder.query<any, string>({    //<any , void>  1ist arg show response type of API, 2nd Args shows the type of value passed on below line in  () of "query: () => '/crud',"  just below.
      query: (id) => `patient/getProduct/${id}`,
      providesTags:["Product"]
    }),
    addProducts: builder.mutation<void, Product>({
      query: (product) => ({
        url: "/patient/addProduct",
        method: "POST",
        body: product
      }),
      invalidatesTags:["Product"]  // this makes caches invalidate  and so API get called again to collect recent data in Cache
    }),
    deleteProduct: builder.mutation<any, string>({
      query: (id) => ({
        url: `/patient/deleteProduct/${id}`,
        method: "DELETE"
      }),
      invalidatesTags:["Product"]  // this makes caches invalidate  and so API get called again to collect recent data in Cache
    }),
    updateProduct: builder.mutation<any,any>({
      query: ({_id,...rest}) => ({
        url: `/patient/updateProduct/${_id}`,
        method: "PATCH",
        body:rest
      }),
      invalidatesTags:["Product"]  // this makes caches invalidate  and so API get called again to collect recent data in Cache
    }),
  }),
});
export const { useGetProductsQuery ,useGetProductQuery,useAddProductsMutation,useDeleteProductMutation,useUpdateProductMutation} = studentApi;

// Once the slice is defined , redux toolkit queryautomatically exposes a hook for each endpoint, that helps in fetching data in your component.EG: useGetStudentsQuery here
