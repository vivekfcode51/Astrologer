import React from 'react'
import Header from "./components/Header"
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=''>
        <div>
            <Header/>
        </div>

        <div>
            <Outlet/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Layout