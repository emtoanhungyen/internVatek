import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addTocart } from '../../features/CartSlice'
import { getAll } from '../../features/ProductSlice'
import { TypeProducts } from '../../types/products.type'
import { FaShoppingCart } from 'react-icons/fa'
import { toast } from 'react-toastify'

// import images
import Giay1 from './../../assets/images/images-1.webp'
type Props = {}

const Home = (props: Props) => {
    const [search, setSearch] = useState('');

    const products = useAppSelector(item => item.product.value);

    const dispath = useAppDispatch();
    useEffect(() => {
        dispath(getAll());
    }, [])
    const addCart = (item: any) => {
        try {
            dispath(addTocart(item));
        } catch (error) {
            console.log(error);
            toast.error("Có lỗi xảy ra.");
        }
    }

    return (
        <div>
            <input className='border mt-[15px]' type="text" onChange={(e) => { setSearch(e.target.value) }} />
            <div className='w-full grid grid-cols-4 lg2:grid-cols-3 md:grid-cols-2 px-[9%] lg2:px-6 md:px-6 py-8'>
                {Array.isArray(products) && products.filter((value: TypeProducts) => {
                    if (search == "") {
                        return value
                    } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                        return value
                    }
                })?.map((item: TypeProducts, index: any) => {
                    return <div key={index} className='max-w-[260px] h-auto mx-6 cursor-pointer hover:opacity-[90%]'>
                        <div className='max-w-[262px] h-auto'>
                            <Link to={`/products/${item.id}`}>
                                <img src={Giay1} />
                            </Link>
                        </div>
                        <div
                            className='text-left py-2'
                        >
                            <Link
                                className='md:text-[14px]'
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
                            <FaShoppingCart className='text-[#3dc8f6] text-[20px] ml-[30px] md:ml-2 md:text-[18px]' onClick={() => addCart(item)} />
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