import React from "react";
import ProfileMenu from "../reusable_components/ProfileMenu"
import NotificationMenu from "../reusable_components/NotificationMenu ";
import { Menu, Search, Settings} from "lucide-react";

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-3 shadow-[0_1px_3px_0_#0000001a,0_1px_2px_-1px_#0000001a] bg-white">
      {/* Left Section */}
      <div className="flex items-center gap-4">

        <button 
          onClick={onToggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg">
          <Menu size={22} className="text-gray-600" />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Search size={20} className="text-gray-600" />
        </button>
        
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Flag */}
        <img
          src="https://flagcdn.com/in.svg"
          alt="India"
          className="w-6 h-6 rounded-full border border-gray-300"
        />

        {/* Notification */}
        <div className="relative">
          {/* <Bell size={22} className="text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span> */}
          <NotificationMenu/>
        </div>

        {/* Settings */}
        <Settings size={22} className="text-gray-600 cursor-pointer" />

        {/* Avatar */}
        <ProfileMenu/>
      </div>
    </div>
  );
};

export default Header;
