import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Bell } from "lucide-react";

const NotificationMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

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
      {/* Bell Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <Bell size={22} className="text-gray-600 cursor-pointer" />
        {/* Notification dot */}
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ 
              duration: 0.25, 
              type: "spring", 
              stiffness: 300, 
              damping: 22 
            }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-[0px_48px_64px_-16px_#00000040] border border-gray-200 z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
              <h3 className="font-semibold text-gray-800">Notifications</h3>
              <Mail size={18} className="text-gray-500" />
            </div>

            {/* Notification Items */}
            <div className="max-h-80 overflow-y-auto">
              <div className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-sm text-[#737373]">
                    <span className="font-semibold text-[#171717]">Jeremiah Minsk</span> mentioned your comment.
                  </p>
                  <span className="text-xs text-gray-400">2 minutes ago</span>
                </div>
                <span className="w-2 h-2 bg-gray-300 rounded-full mt-2"></span>
              </div>

              <div className="flex items-start gap-3 px-4 py-3 border-t border-gray-200 hover:bg-gray-50 cursor-pointer">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <p className="text-sm text-[#737373]">
                    <span className="font-semibold text-[#171717]">Max Alexander</span> invited you to new project.
                  </p>
                  <span className="text-xs text-gray-400">10 minutes ago</span>
                </div>
                <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
              </div>

              <div className="flex items-start gap-3 px-4 py-3 border-t border-gray-200 hover:bg-gray-50 cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  📅
                </div>
                <div className="flex-1 text-[#737373]">
                  <p className="text-sm">Please submit your daily report.</p>
                  <span className="text-xs text-gray-400">3 hours ago</span>
                </div>
                <span className="w-2 h-2 bg-black rounded-full mt-2"></span>
              </div>
            </div>

            {/* Activity btn */}
            <div className="px-4 py-3">
              <button className="w-full py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-900">
                View All Activity
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotificationMenu;
