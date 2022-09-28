import React from 'react'
import { FaRegUser, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

type Props = {}

const HeaderTop = (props: Props) => {
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
                            <Link to=''>
                                Đăng nhập
                            </Link>
                            <span className='px-2'>|</span>
                            <Link to=''>
                                Đăng ký
                            </Link>
                        </div>
                        <div className=''>
                            <Link
                                className="block lg:inline-block lg:mt-0 font-bold hover:text-red-500 pt-[5px]"
                                to='/cart'
                            >
                                <FaShoppingCart className='text-[#3dc8f6] text-[17px]' />
                            </Link>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default HeaderTop