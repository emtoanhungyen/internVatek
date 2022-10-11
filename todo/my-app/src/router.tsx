import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutHome from './components/LayoutHome'
import Contact from './pages/views/Contact'
import Home from './pages/views/Home'
import Hihi from './pages/views/Home/Hihi'
import ProductAdd from './pages/views/Products/ProductAdd'
import ProductEdit from './pages/views/Products/ProductEdit'
import ProductList from './pages/views/Products/ProductList'

type Props = {}

const Router = (props: Props) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LayoutHome />}>
                    <Route index element={<Home />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='products' element={<ProductList />} />
                    <Route path='product/:id' element={<ProductEdit />} />
                    <Route path='add-product' element={<ProductAdd />} />
                    
                </Route>
                <Route path='demo' element={<Hihi />} />
            </Routes>
        </div>
    )
}

export default Router