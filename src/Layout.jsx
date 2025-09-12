import React, { useState } from 'react'
import Header from "./components/Header"
import Footer from './components/Footer'
import Sidebar from "./components/Sidebar"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Fix Left */}
      <Sidebar sidebarOpen={sidebarOpen} onClose={() => setSidebarOpen(false)}/>

      {/* Right Section (Header + Content + Footer) */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300`}
      >
        {/* Header Fixed */}
        <div className="sticky top-0 z-20">
          <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-[#f5f5f5] p-1  xs3:p-4">
          <Outlet />
        </div>

        {/* Footer Fixed Bottom (optional) */}
        <div className="sticky bottom-0 z-10">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
