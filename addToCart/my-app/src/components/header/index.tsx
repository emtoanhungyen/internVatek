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
      <nav className="w-full flex flex-wrap bg-white p-6 lg2:p-4">
        <div className="lg2:mx-auto">
          <Link to='/'>
            <img className='max-w-[100px]' src={LogoHeader} />
          </Link>
        </div>
        <div className="w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto md:hidden">
          <div className="text-sm lg:flex-grow lg2:flex lg2:justify-center">
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
      </nav>
    </div>
  )
}

export default Header