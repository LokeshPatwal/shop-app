import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Navbar from '../Component/Navbar'
import Announcement from '../Component/Announcement'
import Slider from '../Component/Slider'
import Categories from '../Component/Categories'
import Products from '../Component/Products'
import Newsletter from '../Component/Newsletter'
import Footer from '../Component/Footer'

const GlobalStyle = createGlobalStyle`
   *{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
   }
`
const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home