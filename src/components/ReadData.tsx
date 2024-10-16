import React, { useEffect, useState } from 'react';
import { useGetProductsQuery, useDeleteProductMutation } from '../features/ProductSlice';
import { NavLink } from 'react-router-dom';

function ReadData() {
  // const [read,setRead] = useState([])
  const { data, error, isFetching, isError, isLoading, isSuccess } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  // console.log(data?.data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>something went wrong</div>;


  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">S.No</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {
            data && data?.data?.map((product: any, index: any) => (
              <>
                <tr key={product?._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{product?.price}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className='bg-green-600 border border-black rounded bottom-0 p-2 cursor-pointer' onClick={() => deleteProduct(product._id)}>Delete</button>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className='bg-green-600 border border-black rounded bottom-0 p-2 cursor-pointer'>
                      <NavLink to={`update/${product._id}`}>Edit</NavLink>
                    </button>
                  </td>
                </tr>

              </>
            ))
          }

        </tbody>
      </table>
    </div>
  );
}

export default ReadData;
