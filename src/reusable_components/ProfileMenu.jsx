import React, { useState, useRef, useEffect } from "react";
import { User, Settings, Activity, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  // Outside click close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar */}
      <img
        src="https://randomuser.me/api/portraits/women/45.jpg"
        alt="Profile"
        className="w-9 h-9 rounded-full border cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-[0px_48px_64px_-16px_#00000040] p-4 z-50"
          >
            {/* User Info */}
            <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-sm font-semibold">Angelina Gotelli</h4>
                <p className="text-xs text-gray-500">admin-01@ecme.com</p>
              </div>
            </div>

            {/* Menu Items with Routing */}
            <div className="flex flex-col mt-3 gap-2 text-sm font-semibold">

              <button
                onClick={() => navigate("/profile")}
                className="flex items-center gap-2 px-2 py-2 text-[#525252] rounded hover:bg-gray-200"
              >
                <User size={18} /> Profile
              </button>

              <button
                onClick={() => navigate("/account-setting")}
                className="flex items-center gap-2 px-2 py-2 rounded text-[#525252] hover:bg-gray-200"
              >
                <Settings size={18} /> Account Setting
              </button>

              <button
                onClick={() => navigate("/activity-log")}
                className="flex items-center gap-2 px-2 py-2 rounded text-[#525252] hover:bg-gray-200"
              >
                <Activity size={18} /> Activity Log
              </button>
              
            </div>

            {/* Sign Out */}
            <div className="border-t border-gray-200 mt-3 pt-2 text-sm font-semibold">
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-2 px-2 py-2 rounded text-[#525252] hover:bg-gray-200 w-full text-left"
              >
                <LogOut size={18} /> Sign Out
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileMenu;
