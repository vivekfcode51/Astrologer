import React, { useState } from "react";
import {
  User,
  Shield,
  Bell,
  CreditCard,
  RefreshCw,
  Menu,
  X,
} from "lucide-react";
import Profile from "./Profile";
import Security from "./Security";
import Notifications from "./Notifications"
import Billing from "./Billing";

const ProfileLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Profile"); // default

  const menuItems = [
    { icon: User, label: "Profile" },
    { icon: Shield, label: "Security" },
    { icon: CreditCard, label: "Billing" },
    { icon: Bell, label: "Notification" },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case "Profile":
        return <Profile />;
      case "Security":
        return <Security />;
      case "Notification":
        return <Notifications />;
      case "Billing":
        return <Billing />;
      default:
        return <Profile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-1 xs3:p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="xs:text-3xl font-bold text-gray-900">Settings</h1>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-lg bg-gray-200 "
          >
            <Menu size={22} />
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar (Desktop) */}
          <div className="hidden md:block w-64 bg-white rounded-lg shadow-sm p-4">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveMenu(item.label)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    activeMenu === item.label
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-1 xs3:p-5">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 z-50 flex">
          <div className="w-64 bg-white h-full p-4 shadow-lg">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mb-4 p-2 rounded-lg bg-gray-200"
            >
              <X size={22} />
            </button>
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setActiveMenu(item.label);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    activeMenu === item.label
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>
          {/* click outside close */}
          <div className="flex-1" onClick={() => setIsMenuOpen(false)}></div>
        </div>
      )}
    </div>
  );
};

export default ProfileLayout;
