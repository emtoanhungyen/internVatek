import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/footer'
import Header from '../../components/header'

type Props = {}

const LayoutHome = (props: Props) => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )

}

export default LayoutHome
