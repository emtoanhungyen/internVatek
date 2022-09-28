import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/views/cart/Cart';
import Home from './pages/views/Home';
import LayoutHome from './pages/views/LayoutHome';
import AddProduct from './pages/views/products/AddProduct';
import DetailProduct from './pages/views/products/DetailProduct';
import EditProduct from './pages/views/products/EditProduct';
import ListProducts from './pages/views/products/ListProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutHome />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<ListProducts />} />
          <Route path='/products/:id' element={<DetailProduct />} />
          <Route path='/products/:id/edit' element={<EditProduct />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
