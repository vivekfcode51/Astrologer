import React from "react";
import menuLogo from "../assets/logo-light-streamline.png"
import {
  Home,
  Users,
  BarChart2,
  Sparkles,
  LayoutDashboard,
  ChevronDown,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-300 px-6 py-6 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center gap-2 mb-10">
        <div className="text-white rounded-lg">
          {/* <LayoutDashboard size={20} /> */}
          <img src={menuLogo} alt="dashboardLogo" className="w-[3rem] h-[3rem]"/>
        </div>
        <h1 className="text-2xl font-bold text-[#1F2936]">Astrovaaani</h1>
      </div>

      {/* Dashboard Section */}
      <p className="text-[16px] font-bold text-[#737373] mb-4">ADMIN PANEL</p>
      <ul className="space-y-4 text-gray-700 font-medium">

        <li className="flex items-center gap-3 cursor-pointer hover:text-black">
          <Home size={18} /> Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-black">
          <Users size={18} /> Astrologer
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-black">
          <BarChart2 size={18} /> Analytic
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-black">
          <Users size={18} /> User
        </li>
        
      </ul>

      {/* Concepts Section */}
      <p className="text-[16px] font-bold text-[#737373] mt-8 mb-4">CONCEPTS</p>
      <ul className="space-y-4 text-gray-700 font-medium">
        <li className="flex items-center justify-between cursor-pointer hover:text-black">
          <div className="flex items-center gap-3">
            <Sparkles size={18} /> AI
          </div>
          <ChevronDown size={16} />
        </li>
        <li className="flex items-center justify-between cursor-pointer hover:text-black">
          <div className="flex items-center gap-3">
            <LayoutDashboard size={18} /> Projects
          </div>
          <ChevronDown size={16} />
        </li>
        <li className="flex items-center justify-between cursor-pointer hover:text-black">
          <div className="flex items-center gap-3">
            <Users size={18} /> Customer
          </div>
          <ChevronDown size={16} />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
