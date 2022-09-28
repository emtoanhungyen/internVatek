import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { addTocart } from '../../features/CartSlice'
import { getAll } from '../../features/ProductSlice'
import { TypeProducts } from '../../types/products.type'

import toastr from 'toastr';
import "toastr/build/toastr.min.css";

type Props = {}

const Home = (props: Props) => {
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
        <div className='w-max flex px-8 py-8'>
            {products?.map((item: TypeProducts, index: any) => {
                return <div key={index} className='w-[200px] h-auto border rounded-[5px] mx-6 cursor-pointer hover:opacity-[80%]'>
                    <Link to={`/products/${item.id}`}>
                        <div>
                            <img src='https://res.cloudinary.com/dd0io3fh2/image/upload/v1645459720/bvjztlykr61fzv2ss6zo.jpg' />
                        </div>
                        <div>
                            <span>{item.price} $</span>
                        </div>
                        <div>
                            <Link to={`/products/${item.id}`}>
                                {item.name}
                            </Link>
                        </div>
                    </Link>
                    <button
                        className="w-[200px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border 
                            border-blue-500 hover:border-transparent rounded"
                        onClick={() => addCart(item)}
                    >
                        add to cart
                    </button>

                </div>
            })}

        </div>
    )
}

export default Home