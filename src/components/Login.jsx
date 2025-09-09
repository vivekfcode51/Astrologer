import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import authImage from "../assets/auth-side-bg.png";
import google from "../assets/google.png"
import github from "../assets/github.png"


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-4">
      <div className="flex w-full max-w-5xl shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-[#171717] mb-8 isolate font-medium">
            Please enter your credentials to sign in!
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-[#737373] font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="admin-01@ecme.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm text-[#737373] font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-sm text-black font-medium">
              Forgot password
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Sign In
          </button>

          {/* OR Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-[#171717] font-semibold text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4">

            <button className="button bg-white border border-gray-300 ring-primary 
                 hover:border-primary hover:ring-1 hover:text-primary text-gray-600 h-12 rounded-xl px-5 py-2 flex-1 button-press-feedback">
              <div className="flex items-center justify-center gap-2">
                <img src={google} alt="Google sign in" className="w-[25px] h-[25px]"/>
                <span>Google</span>
              </div>
            </button>

            {/* <button className="button bg-white border border-gray-300 ring-primary
                hover:border-primary hover:ring-1 hover:text-primary text-gray-600 h-12 rounded-xl px-5 py-2 flex-1 button-press-feedback">
              <div className="flex items-center justify-center gap-2">
                <img src={github} alt="Google sign in" className="w-[25px] h-[25px]"/>
                <span>Github</span>
              </div>
            </button> */}

          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="py-6 px-10 lg:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative max-w-[520px] 2xl:max-w-[720px]">
          <img
            src={authImage}
            alt="login banner"
            className="absolute h-full w-full top-0 left-0 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;


