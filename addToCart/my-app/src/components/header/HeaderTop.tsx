import React from 'react'
import { FaRegUser, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

type Props = {}

const HeaderTop = (props: Props) => {
    const { cart, totalItem, quantityProductInCart } = useAppSelector(item => item.cart);
    // console.log('totalItem=======', totalItem);
    // console.log('quantity--------', quantityProductInCart);

    return (
        <div>
            <div className='bg-white '>
                <div className="flex justify-between px-4">
                    <div className='flex text-[#5b5b5b] text-[12px] py-2'>
                        <p className='uppercase'>Sản phẩm chính hãng 100%</p>
                        <span className='px-2'>|</span>
                        <p>
                            Hotline: <span className='text-[#3dc8f6] font-bold'>19008198</span>
                        </p>
                    </div>
                    <div className="flex items-center">
                        <div className='flex text-[12px] text-[#337ab7] px-4'>
                            <FaRegUser className='text-[#3dc8f6] text-[17px] mr-2' />
                            <Link to='/login'>
                                Đăng nhập
                            </Link>
                            <span className='px-2'>|</span>
                            <Link to='/register'>
                                Đăng ký
                            </Link>
                        </div>
                        <div className='flex mr-4'>
                            <Link
                                className="block lg:inline-block lg:mt-0 font-bold hover:text-red-500 pt-[5px] pr-2"
                                to='/cart'
                            >
                                <FaShoppingCart className='text-[#3dc8f6] text-[17px]' />
                            </Link>
                            {
                                cart.length > 0 ? (<div className='mt-[2px]'>
                                    <span
                                        className='bg-[#3dc8f6] text-white px-[7px] rounded-full'
                                    >
                                        {quantityProductInCart}
                                    </span>
                                </div>) : ('')
                            }
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default HeaderTop