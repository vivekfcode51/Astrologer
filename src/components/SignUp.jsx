import React from "react";
import authImage from "../assets/auth-side-bg.png";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-10">
      <div className="flex w-full max-w-5xl h-[600px] shadow-lg rounded-2xl overflow-hidden">
        
        {/* Left Side (Form) */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-2">Sign Up</h2>
          <p className="text-gray-600 mb-8">
            And lets get started with your free trial
          </p>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-sm text-[#737373] font-medium mb-2">User name</label>
            <input
              type="text"
              placeholder="User Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-[#737373] font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm text-[#737373] font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#737373 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer">
            Sign Up
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="py-6 px-10 md:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative max-w-[520px] 2xl:max-w-[720px]">
          <img
            src={authImage}
            alt="signup banner"
            className="absolute h-full w-full top-0 left-0 rounded-3x object-coverl"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
