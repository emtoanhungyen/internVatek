import React from 'react'
import { Link } from 'react-router-dom'
import LogoHeader from './../../assets/images/logo.webp';
import Search from './search/Search';
import HeaderTop from './HeaderTop';
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='w-full fixed z-10 top-0 left-0'>
      {/* header top */}
      <HeaderTop />
      {/*  */}
      <nav className="flex justify-between flex-wrap bg-white p-6">
        <div className="w-[100px]">
          <img src={LogoHeader} />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
              to='/'
            >
              Trang chủ
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
              to='/products'
            >
              Danh sách sản phẩm
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
              to='/'
            >
              Danh mục
            </Link>
            <Link
              className="block mt-4 lg:inline-block lg:mt-0 text-[#5b5b5b] font-bold hover:text-red-500 mr-4"
              to='/'
            >
              Liên hệ
            </Link>
          </div>
        </div>
        {/* <div className=''>
          <Search />
        </div> */}
      </nav>
      {/* div modal */}
    </div>
  )
}

export default Header