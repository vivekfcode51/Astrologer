import React from "react";
import menuLogo from "../assets/logo-light-streamline.png";
import {
  Home,
  Users,
  BarChart2,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, onClose }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex h-screen bg-white border-r border-gray-300 flex-col transition-all duration-300
          ${sidebarOpen ? "w-64 px-6" : "w-20 px-2"} py-6`}
      >
        {/* Logo Section */}
        <div
          className={`flex items-center ${
            sidebarOpen ? "justify-start" : "justify-center"
          } mb-10`}
        >
          <img
            src={menuLogo}
            alt="dashboardLogo"
            className="w-[2.5rem] h-[2.5rem]"
          />
          {sidebarOpen && (
            <h1 className="ml-2 text-2xl font-bold text-[#1F2936]">
              Astrovaaani
            </h1>
          )}
        </div>

        {/* Dashboard Section */}
        {sidebarOpen && (
          <p className="text-[18px] font-bold text-[#737373] mb-6">
            ADMIN PANEL
          </p>
        )}

        <ul className="flex flex-col gap-8 text-gray-700 font-medium">
          <li
            className={`flex items-center ${
              sidebarOpen ? "justify-start gap-3" : "justify-center"
            } cursor-pointer hover:text-black`}
          >
            <Home size={22} />
            {sidebarOpen && "Dashboard"}
          </li>

          <li
            className={`flex items-center ${
              sidebarOpen ? "justify-start gap-3" : "justify-center"
            } cursor-pointer hover:text-black`}
          >
            <Users size={22} />
            {sidebarOpen && "Astrologer"}
          </li>

          <li
            className={`flex items-center ${
              sidebarOpen ? "justify-start gap-3" : "justify-center"
            } cursor-pointer hover:text-black`}
          >
            <BarChart2 size={22} />
            {sidebarOpen && "Analytic"}
          </li>

          <li
            className={`flex items-center ${
              sidebarOpen ? "justify-start gap-3" : "justify-center"
            } cursor-pointer hover:text-black`}
          >
            <Users size={22} />
            {sidebarOpen && "User"}
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar (Overlay) */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 md:hidden transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 h-full bg-white px-6 py-6 flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="self-end text-gray-600 hover:text-black mb-6"
          >
            ✕
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <img
              src={menuLogo}
              alt="dashboardLogo"
              className="w-[2.5rem] h-[2.5rem]"
            />
            <h1 className="ml-2 text-2xl font-bold text-[#1F2936]">
              Astrovaaani
            </h1>
          </div>

          {/* Dashboard Section */}
          <p className="text-[18px] font-bold text-[#737373] mb-6">
            ADMIN PANEL
          </p>

          <ul className="flex flex-col gap-8 text-gray-700 font-medium">
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <Home size={22} /> Dashboard
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <Users size={22} /> Astrologer
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <BarChart2 size={22} /> Analytic
            </li>
            <li className="flex items-center gap-3 cursor-pointer hover:text-black">
              <Users size={22} /> User
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
