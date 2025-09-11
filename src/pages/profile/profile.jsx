import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  User,
  Shield,
  Bell,
  CreditCard,
  RefreshCw,
  ChevronDown,
} from "lucide-react";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false); // 🔹 HIGHLIGHT START (loader state)

  // Load initial image
  const savedImage = localStorage.getItem("profileImage");
  const [profileImage, setProfileImage] = useState(savedImage || null);

  const menuItems = [
    { icon: User, label: "Profile", active: true },
    { icon: Shield, label: "Security", active: false },
    { icon: Bell, label: "Notification", active: false },
    { icon: CreditCard, label: "Billing", active: false },
    { icon: RefreshCw, label: "Integration", active: false },
  ];

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
        localStorage.setItem("profileImage", reader.result);
        toast.success("Image uploaded successfully!");
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle remove image
  const handleRemoveImage = () => {
    setProfileImage(null);
    localStorage.removeItem("profileImage");
    toast.info("Image removed successfully!");
  };

  // Save profile data to backend using Axios
  const handleSaveProfile = async () => {
    const data = {
      firstName,
      userName,
      email,
      phone,
      profileImage,
    };

    try {
      setLoading(true); // start loader
      const response = await axios.post(
        "https://your-backend.com/api/profile", // <-- Replace with your API endpoint
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.status === 200) {
        toast.success("Profile saved successfully!");
        localStorage.setItem("profileData", JSON.stringify(data));
      } else {
        toast.error("Failed to save profile!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <ToastContainer position="top-right" />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>

        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow-sm p-4">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
                    item.active
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
          <div className="flex-1 bg-white rounded-lg shadow-sm p-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Personal information
              </h2>

              {/* Profile Picture Section */}
              <div className="mb-8 flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-orange-200 flex items-center justify-center">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 font-medium">No Image</span>
                  )}
                </div>
                <div className="flex gap-3">
                  <label className="bg-[#18181b] text-white px-4 py-2 rounded-[.75rem] whitespace-nowrap flex items-center font-medium hover:bg-gray-800 transition-colors cursor-pointer">
                    + Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  <button
                    onClick={handleRemoveImage}
                    className="border border-gray-300 text-gray-700 px-4 py-2 rounded-[.75rem] whitespace-nowrap flex items-center font-medium hover:border-black hover:bg-gray-50 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 font-medium mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Enter First name"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 text-gray-900 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 font-medium mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter Last name"
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 text-gray-900 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg border-0 text-gray-900 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-gray-600 font-medium mb-2">
                    Phone number
                  </label>
                  <div className="flex gap-2">
                    <div className="relative">
                      <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-lg border-0 min-w-[80px]">
                        <span className="text-gray-900 font-medium">+91</span>
                        <ChevronDown size={16} className="text-gray-600" />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="1234567890"
                      className="flex-1 px-4 py-3 bg-gray-100 rounded-lg border-0 text-gray-900 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex mt-6 justify-end">
                <button
                  onClick={handleSaveProfile}
                  disabled={loading} // 🔹 HIGHLIGHT START (disable button while loading)
                  className={`bg-[#18181b] text-white rounded-[.75rem] whitespace-nowrap flex items-center hover:bg-gray-800 text-neutral h-12 px-5 py-2 ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Saving..." : "Save"} {/* 🔹 HIGHLIGHT END (show loader text) */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
