import React, { useEffect, useState } from 'react'
import { FaBars, FaRegUser, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppSelector } from '../../app/hooks'

type Props = {}

const HeaderTop = (props: Props) => {
    const { cart, quantityProductInCart } = useAppSelector(item => item.carts);
    const [users, setUsers] = useState<any>(null);
    const [openMenu, setOpenMenu] = useState<any>(false);

    useEffect(() => {
        const users = JSON.parse(localStorage.getItem('auth') as string);
        setUsers(users);
    }, [])

    const logout = () => {
        localStorage.removeItem('auth');
        setUsers(null)
        toast.info('Đăng xuất thành công.');
    }


    return (
        <div className='h-[35px]' >
            <div className='bg-white '>
                <div className="flex justify-between px-4">
                    <div className='flex text-[#5b5b5b] text-[12px] py-2 min:hidden'>
                        <p className='uppercase'>Sản phẩm chính hãng 100%</p>
                        <span className='px-2'>|</span>
                        <p>
                            Hotline: <span className='text-[#3dc8f6] font-bold'>19008198</span>
                        </p>
                    </div>
                    <div className="flex items-center ">
                        <div className='flex text-[12px] text-[#337ab7] px-4 md:hidden'>
                            <FaRegUser className='text-[#3dc8f6] text-[17px] mr-2' />
                            {
                                users === null ? (<div>
                                    <Link to='/login'>
                                        Đăng nhập
                                    </Link>
                                    <span className='px-2'>|</span>
                                    <Link to='/register'>
                                        Đăng ký
                                    </Link>
                                </div>) : (<div className='flex'>
                                    {users.user.username}
                                    <FaSignOutAlt
                                        className='cursor-pointer text-[17px] text-[#3dc8f6] ml-2 mt-[2px]'
                                        onClick={() => logout()} />
                                </div>)
                            }
                        </div>
                        <div className='flex mr-4 md:hidden'>
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
                    <div className='hidden md:block'>
                        <FaBars className='text-[#3dc8f6] text-[22px] mt-[5px] cursor-pointer' onClick={() => setOpenMenu(openMenu ? false : true)} />
                    </div>
                </div>
                <div className={openMenu ? "hidden md:block" : "hidden md:hidden"}>
                    <div className="w-full md:z-1000 lg:block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow lg2:text-right lg2:justify-center">
                            <Link
                                className="block mt-2 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
                                to='/'
                            >
                                Trang chủ
                            </Link>
                            <Link
                                className="block mt-2 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
                                to='/products'
                            >
                                Danh sách sản phẩm
                            </Link>
                            <Link
                                className="block mt-2 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
                                to='/'
                            >
                                Danh mục
                            </Link>
                            <Link
                                className="block mt-2 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
                                to='/'
                            >
                                Liên hệ
                            </Link>
                            <Link
                                className="block mt-2 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
                                to='/cart'
                            >
                                Giỏ hàng
                            </Link>
                        </div>
                    </div>
                </div>
                <hr className='min:hidden' />
            </div>
        </div>
    )
}

export default HeaderTop