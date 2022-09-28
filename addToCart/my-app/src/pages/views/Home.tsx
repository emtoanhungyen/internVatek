import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addTocart } from '../../features/CartSlice'
import { getAll } from '../../features/ProductSlice'
import { TypeProducts } from '../../types/products.type'
// import images
import Giay1 from './../../assets/images/images-1.webp'

import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import { FaShoppingCart } from 'react-icons/fa'

type Props = {}

const Home = (props: Props) => {
    const [search, setSearch] = useState('');
    console.log(search);


    const products = useAppSelector(item => item.product.value);
    const dispath = useAppDispatch();
    useEffect(() => {
        dispath(getAll());
    }, [])
    const addCart = (item: any) => {
        try {
            dispath(addTocart(item));
            console.log('add to cart');
        } catch (error) {
            console.log(error);
            toastr.error("Có lỗi xảy ra.");
        }

    }

    return (
        <div>
            <input className='border mt-[15px]' type="text" onChange={(e) => { setSearch(e.target.value) }} />
            <div className='w-max grid grid-cols-4 px-[9%] py-8'>
                {Array.isArray(products) && products.filter((value: TypeProducts) => {
                    if (search == "") {
                        return value
                    } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                        return value
                    }
                })?.map((item: TypeProducts, index: any) => {
                    return <div key={index} className='w-[262px] h-auto mx-6 cursor-pointer hover:opacity-[90%]'>
                        <div className='w-[262px] h-auto'>
                            <Link to={`/products/${item.id}`}>
                                <img src={Giay1} />
                            </Link>
                        </div>
                        <div
                            className='text-left py-2'
                        >
                            <Link
                                to={`/products/${item.id}`}>
                                {item.name}
                            </Link>
                        </div>
                        <div
                            className='flex text-left py-2'
                        >
                            <span className='text-[#3dc8f6] font-[700]'>
                                {item.price} đ
                            </span>
                            <FaShoppingCart className='text-[#3dc8f6] text-[20px] ml-[30px]' onClick={() => addCart(item)} />
                        </div>
                        {/* <button
                        className="w-[200px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border 
                            border-blue-500 hover:border-transparent rounded"
                        onClick={() => addCart(item)}
                    >
                        add to cart
                    </button> */}

                    </div>
                })}
            </div>
        </div>
    )
}

export default Home