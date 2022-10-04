import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { editProducts } from '../../../features/ProductSlice';
import { TypeProducts } from '../../../types/products.type';
import { getOneProduct } from '../../../api/products';
import { toast } from 'react-toastify';

type Props = {}
type InputForm = {
    id?: number,
    name: string,
    price: number,
    desc: string
}

const EditProduct = (props: Props) => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<InputForm>()
    const data = useAppSelector((item: any) => item.product.value);
    const navigate = useNavigate();
    const dispath = useAppDispatch();

    useEffect(() => {
        const read = async (id: any) => {
            const { data } = await getOneProduct(id);
            reset(data);
        }
        read(id);
    }, [])

    const onUpdate = async (product: TypeProducts) => {
        try {
            await dispath(editProducts(product));
            toast.success("Update thành công");
            navigate('/products');
        } catch (error) {
            console.log(error);
            toast.error("Có lỗi xảy ra");
        }
    }

    return (
        <div className='w-[1000px] mx-auto mt-8'>
            <form onSubmit={handleSubmit(onUpdate)}>
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
                        {...register('price')}
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

export default EditProduct 