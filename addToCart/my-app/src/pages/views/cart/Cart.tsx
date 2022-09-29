import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { derementProduct, incrementProduct, removeProductToCart } from '../../../features/CartSlice';
//import toastr
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

type Props = {}

const Cart = (props: Props) => {
    const { cart, total } = useAppSelector(item => item.cart);
    const dispath = useAppDispatch()

    const reProToCart = (id: any) => {
        try {
            const confirm = window.confirm("Bạn có muốn xóa?");
            if (confirm) {
                dispath(removeProductToCart(id));
            }
        } catch (error) {
            console.log(error);
            toastr.error("Đã có lỗi xảy ra.");
        }
    }
    const deCreProduct = (id: any) => {
        try {
            dispath(derementProduct(id));
        } catch (error) {
            console.log(error);
            toastr.error("Đã có lỗi xảy ra");
        }
    }
    const inCreProduct = (id: any) => {
        try {
            dispath(incrementProduct(id));
        } catch (error) {
            console.log(error);
            toastr.error("Đã có lỗi xảy ra");
        }
    }
    return (
        <div>
            {
                cart.length > 0 ? (<div>
                    <h4 className="text-2xl font-bold dark:text-white">Cart</h4>
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
                                        Quantity
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart?.map((item, index) => {
                                    return <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                        <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </td>
                                        <td className="py-4 px-6">
                                            {item.price}
                                        </td>
                                        <td className="py-4 px-6 flex">
                                            <span
                                                onClick={() => deCreProduct(item.id)}
                                                className='w-[20px] cursor-pointer'
                                            >
                                                -
                                            </span>
                                            <p className='mx-6'>{item.quantity}</p>
                                            <span
                                                onClick={() => inCreProduct(item.id)}
                                                className='w-[20px] cursor-pointer'
                                            >
                                                +
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <button
                                                onClick={() => reProToCart(item.id)}
                                                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 
                                          hover:border-transparent rounded"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                })}
                                <tr>
                                    <td className='w-full mt-6 mb-2 font-bold px-6 flex justify-between'>
                                        <p className='text-[15px]'>Tổng tiền tạm tính:</p>
                                        <span className='text-[15px]'>
                                            {total}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>) : (
                    <div>
                        <h4 className="text-2xl font-bold dark:text-white">Chưa có sản phẩm nào trong giỏ hàng</h4>
                    </div>
                )
            }

        </div>
    )
}

export default Cart