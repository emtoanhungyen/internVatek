import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { createProducts } from '../../../features/ProductSlice'
import { TypeProducts } from '../../../types/products.type'

import toastr from 'toastr';
import "toastr/build/toastr.min.css";

type Props = {

}

type InputForm = {
  name: string,
  price: number,
  desc: string
}

const AddProduct = (props: Props) => {
  const { register, handleSubmit, formState: { errors } } = useForm<InputForm>();
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const onAddProduct = async (product: TypeProducts) => {
    try {
      await dispath(createProducts(product));
      console.log('data', product);

      navigate('/products');
      toastr.success('Thêm sản phẩm thành công.');
    } catch (error) {
      console.log(error);
      toastr.error("Đã có lỗi xảy ra.");
    }
  }

  return (
    <div className='w-[1000px] mx-auto mt-8' onSubmit={handleSubmit(onAddProduct)}>
      <form>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
              p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            {...register('name', { required: true })}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Price
          </label>
          <input
            type="number"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            {...register('price', { required: true })}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Description
          </label>
          <input
            type="text"
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
              block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            {...register('desc')}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProduct