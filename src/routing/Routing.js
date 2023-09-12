import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Mens from '../components/category/Mens';
import Womens from '../components/category/Womens';
import Kids from '../components/category/Mens';
import Home from '../components/Home/Home';
import Products from '../components/explore/Products/Products';
import NewProducts from '../components/explore/Products/NewProducts';
import ProductDetails from '../components/explore/Products/ProductDetails';

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mens' element={<Mens />} />
        <Route path='/womens' element={<Womens />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/products' element={<Products />} />
        <Route path='/newProduct' element={<NewProducts />} />
        <Route path='/productDetail' element={<ProductDetails />} />
    </Routes>
  )
}
