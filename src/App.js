import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import Product from './Pages/Product'
import Home from './Pages/Home'
import ProductList from './Pages/ProductList'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Cart from './Pages/Cart'

const GlobalStyle = createGlobalStyle`
   *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
   }
`
const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
