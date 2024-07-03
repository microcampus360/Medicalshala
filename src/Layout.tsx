import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'

const Layout = () => {
  return (
    <>
          <div className="h-screen flex flex-col">
            <Header/>
            <Outlet/>
            <Footer/>
          </div>
    </>
  )
}

export default Layout