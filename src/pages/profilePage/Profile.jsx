import React from "react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";

const profile = () => {

    const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // Load initial image 
  const savedImage = localStorage.getItem("profileImage");
  const [profileImage, setProfileImage] = useState(savedImage || null);

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

  const handleRemoveImage = () => {
    setProfileImage(null);
    localStorage.removeItem("profileImage");
    toast.info("Image removed successfully!");
  };


 // ✅ Get Profile Data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token"); // 👈 login ke baad save kiya tha
        if (!token) {
          toast.error("Token not found, please login again!");
          return;
        }

        const response = await axios.get("https://astrovaaani.com/api/auth/me", {
           withCredentials: true, // 👈 yaha se cookies jayengi
        });

        if (response.data?.user) {
          const user = response.data.user;

          // Response me jo fields mil rahi hai, unko set karo
          setPhone(user.mobile || "");
          setUserName(user.role || ""); // role ko abhi userName box me dikhaya
          setEmail(user.email || "");
          setFirstName(user._id || ""); // kyunki abhi API me firstName nahi hai
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

    return (
    <div>
      <div className="flex-1 bg-white rounded-lg shadow-sm p-1 xs3:p-5">
        <div className="max-w-2xl mb-[10px]">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Personal information
          </h2>

          {/* Profile Picture Section */}
          <div className="mb-8 flex items-center gap-2 xs3:gap-6">
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
            //   onClick={handleSaveProfile}
              disabled={loading}
              className={`bg-[#18181b] text-white rounded-[.75rem] font-semibold whitespace-nowrap flex items-center hover:bg-gray-800 h-12 px-5 py-2 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default profile