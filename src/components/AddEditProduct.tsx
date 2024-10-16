
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../model/Product.Model';
import { 
    useAddProductsMutation, 
    useGetProductQuery,
    useUpdateProductMutation } from '../features/ProductSlice';


function AddEditProduct() {
    const [products, setProducts] = useState<Product>(Object);
    const [editMode, setEditMode] = useState<boolean>(false);

    const { id } = useParams();

    const { data } = useGetProductQuery(id!); // make sure that id is not undefined 
    const [addProduct] = useAddProductsMutation();
    const [updateProduct]=useUpdateProductMutation();

    // const { refetch } = useGetProductsQuery(); // this can be used for making API of getProducts endpoints to call once again wher
    const navigate = useNavigate();
    
    // console.log(data, "data")
    // e:React.ChangeEvent<HTMLInputElement>   this is actual type of e , but we can use any also.

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProducts({ ...products, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (id && data) {
            setEditMode(true);
            setProducts({ ...data.data });
        } else {
            setEditMode(false);
        }
    }, [id, data])
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (editMode) {
           await updateProduct(products)
        } else {
            await addProduct(products);
        }
        setEditMode(false);
        // refetch(); // this can be used for making API of getProducts endpoints to call once again . We can used tage in palce of doing this , which is done ProductSlice
        navigate("/");
        // console.log(products,"product");
    }
    return (
        <div className="container mx-auto">
            <h1 className='text-2xl text-orange-700'>{editMode?"Update form":"Add form"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" onChange={handleChange}
                        name="name"
                        value={products?.name}
                        className="form-control" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Category</label>
                    <input type="text" onChange={handleChange}
                        name="category"
                        value={products?.category}
                        className="form-control" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
                    <input type="text" onChange={handleChange}
                        name="price"
                        value={products?.price}
                        className="form-control" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">{editMode?"Update":"Add"}</button>
            </form>

        </div>
    );
}

export default AddEditProduct;