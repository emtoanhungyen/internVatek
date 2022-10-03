import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../app/hooks'
import { createProducts } from '../../../features/ProductSlice'
import { TypeProducts } from '../../../types/products.type'

import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { toast } from 'react-toastify'

type Props = {
}

const defaultValues = {
  name: '',
  price: 0,
  desc: ''
}

const AddProduct = (props: Props) => {
  const { control } = useForm({ defaultValues });
  const dispath = useAppDispatch();
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      desc: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Không được để trống.')
        .min(4, 'Nhập hơn 4 ký tự.')
        .max(36, 'Không quá 36 ký tự.'),
      price: Yup.number()
        .required('Không được để trống.')
        .typeError('Giá phải là số cơ ông cháu ơi'),
      desc: Yup.string()
        .max(50, 'nhập ít thôi ông cháu')
    }),
    onSubmit: (values: any) => {
      try {
        dispath(createProducts(values));
        console.log('data', values);

        navigate('/products');
        toast.success('Thêm thành công.');
      } catch (error) {
        console.log(error);
        toast.error('Có lỗi!');
      }
    }
  })

  return (
    <div className='w-[1000px] mx-auto mt-8'>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <Controller
            name='name'
            control={control}
            render={() => <div>
              <input
                type="text"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
              p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <p className='text-red-600 text-left pt-2 text-[12px]'>
                  {formik.errors.name}
                </p>
              )}
            </div>}
          />

        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Price
          </label>
          <Controller
            name='price'
            control={control}
            render={() => <div>
              <input
                type="number"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
              p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                name='price'
                value={formik.values.price}
                onChange={formik.handleChange}
              />
              {formik.errors.price && formik.touched.price && (
                <p className='text-red-600 text-left pt-2 text-[12px]'>
                  {formik.errors.price}
                </p>
              )}
            </div>}
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Description
          </label>
          <Controller
            name='desc'
            control={control}
            render={() => <div>
              <input
                type="text"
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
              p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                name='desc'
                value={formik.values.desc}
                onChange={formik.handleChange}
              />
              {formik.errors.desc && formik.touched.desc && (
                <p className='text-red-600 text-left pt-2 text-[12px]'>
                  {formik.errors.desc}
                </p>
              )}
            </div>}
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