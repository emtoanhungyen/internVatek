import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div>
            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link className="mr-4 hover:underline md:mr-6 " to='/'>Trang chủ</Link>
                    </li>
                    <li>
                        <Link to='/products' className="mr-4 hover:underline md:mr-6" >Danh sách sản phẩm</Link>
                    </li>
                    <li>
                        <Link to='#' className="mr-4 hover:underline md:mr-6">Danh mục</Link>
                    </li>
                    <li>
                        <Link to='#' className="hover:underline">Liên hệ</Link>
                    </li>
                </ul>
            </footer>

        </div >
    )
}

export default Footer