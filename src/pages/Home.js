import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'
import RetailStores from '../components/RetailStores/RetailStores'
import Search from '../components/Search/Search'

const Home = () => {
 
  return (
    <>
        <Navbar/>
        <Search/>
        <Products/>
        <RetailStores/>
        <Footer/>
    </>
  )
}

export default Home