import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { deleteProducts, getAll } from '../../../features/ProductSlice';
import { TypeProducts } from '../../../types/products.type';

import toastr from 'toastr';
import "toastr/build/toastr.min.css";


type Props = {}

const ListProducts = (props: Props) => {
    const products = useAppSelector(item => item.product.value);
    const dispath = useAppDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispath(getAll());
    }, [])

    const remove = (id: any) => {
        try {
            const confirm = window.confirm("Bạn có muốn xóa?");
            if (confirm) {
                dispath(deleteProducts(id));
                toastr.success("Xóa thành công.");
            }
        } catch (error) {
            console.log(error);
            toastr.error("Đã có lỗi xảy ra.");
        }
    }
    return (
        <div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                            <th className='text-sm px-4 py-2 leading-none text-black hover:text-teal-500 mt-4 lg:mt-0'>
                                <Link to='/add-product' >
                                    Create
                                </Link>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((item: TypeProducts, index: any) => {
                            return <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.name}
                                </th>
                                <td className="py-4 px-6">
                                    {item.price}
                                </td>
                                <td className="py-4 px-6">
                                    {item.desc}
                                </td>
                                <td className="py-4 px-6">
                                    <Link to={`/products/${item.id}/edit`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                    <button
                                        className="bg-transparent ml-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 
                                          hover:border-transparent rounded"
                                        onClick={() => remove(item.id)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListProducts