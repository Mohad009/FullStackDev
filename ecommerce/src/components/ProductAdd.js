import React from 'react'
import { productSchemaValidation } from "../validations/ProductValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function ProductAdd() {
const {
    register,
    handleSubmit,
    formState:{errors}
}=useForm({resolver:yupResolver(productSchemaValidation)})

const submitData=(data)=>{
    alert("All validation are good")

}
  return (
    <div className="w-50 mx-auto">
      <form onSubmit={handleSubmit(submitData)}>
        <div className="container mt-4 ">
          <h2>Add New Product</h2>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="productName"
              placeholder="Enter product name"
          {...register("productName")}
            />
            <p className='error'>{errors.productName?.message}</p>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="productDesc"
              placeholder="Enter product description"
              {...register("description")}
            />
            <p className='error'>{errors.description?.message}</p>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="productPrice"
              placeholder="Enter product price"
              {...register("price")}
            />
            <p className='error'>{errors.price?.message}</p>
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="productQuantity"
              placeholder="Enter quantity available"
              {...register("quantity")}
            />
            <p className='error'>{errors.quantity?.message}</p>
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductAdd
