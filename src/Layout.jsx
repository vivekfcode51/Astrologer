import React, { useState } from 'react'
import Header from "./components/Header"
import Footer from './components/Footer'
import Sidebar from "./components/Sidebar"
import { Outlet } from 'react-router-dom'

const Layout = ({ children }) => {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar Fix Left */}
      <div className={`transition-all duration-300 ${sidebarOpen ? "w-64" : "w-0"} overflow-hidden`}>
        <Sidebar />
      </div>

      {/* Right Section (Header + Content + Footer) */}
      <div className="flex-1 flex flex-col">

       {/* Header section */}
        <div>
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}/>
        </div>

        {/* Content section*/}
        <div className="flex-1 p-6 bg-[#f5f5f5]">
          <Outlet />
        </div>

        {/* Footer section */}
        <div>
          <Footer />
        </div>

      </div>
    </div>
  )
}

export default Layout
