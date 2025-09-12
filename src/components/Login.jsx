import React, { useState, useEffect } from "react";
import authImage from "../assets/auth-side-bg.png";
import google from "../assets/google.png";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  // Jaise hi phone number 10 digit hoga OTP send call karega
  useEffect(() => {
    if (phone.length === 10) {
      handleSendOtp(phone);
    }
  }, [phone]);

  // otp send api call
  const handleSendOtp = async (mobile) => {
    try {
      const url = `https://otp.fctechteam.org/send_otp.php?mobile=${mobile}&digit=6&mode=live`;
      const res = await axios.get(url);
      console.log("OTP sent to:", res);
      if (res?.data?.error === "200") {
        toast.success(res?.data?.msg || "OTP sent successfully!");
        setOtpSent(true);
      } else {
        toast.error(res?.data?.msg || "Failed to send OTP");
      }
    } catch (error) {
      console.error("OTP send failed", error);
      toast.error("Something went wrong while sending OTP");
    }
  };

  // login + otp verify
  const handleLogin = async () => {
    try {
      // Step 1: OTP verify
      const verifyUrl = `https://otp.fctechteam.org/verifyotp.php?mobile=${phone}&otp=${otp}`;
      const verifyRes = await axios.get(verifyUrl);
      console.log("Verify OTP:", verifyRes);

      if (verifyRes?.data?.error === "200") {
        // toast.success("✅ OTP Verified!");

        // Step 2: Login API call
        const loginRes = await axios.post(
          "https://astrovaaani.com/api/auth/login",
          {
            mobile: phone,
            role: "admin", // default role
          },
          {
            withCredentials: true, // ✅ accessToken cookie ke through jayega
          }
        );
        console.log("login Response", loginRes)

        if (loginRes?.status === 201 || loginRes?.data?.status === 201) {
          toast.success(loginRes?.data?.message || "🎉 Login successful!");
          navigate("/");
        } else {
          toast.error(loginRes?.data?.message || "❌ Login failed");
        }
      } else {
        toast.error(verifyRes?.data?.msg || "❌ Invalid OTP");
      }
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Something went wrong while logging in");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white mt-4">
      <div className="flex w-full max-w-5xl shadow-lg rounded-2xl overflow-hidden">
        {/* Left Side (Form) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col">
          <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
          <p className="text-[#171717] mb-8 isolate font-medium">
            Please enter your credentials to sign in!
          </p>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm text-[#737373] font-medium mb-2">
              Phone No.
            </label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.slice(0, 10))}
              placeholder="Enter Your number"
              className="w-full px-4 py-3 rounded-lg text-[#262626] font-[500] border border-gray-300 bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-gray-300
                    [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
            />
            {otpSent && (
              <p className="text-green-600 text-[12px] xs3:text-[16px] mt-1">
                OTP sent to your number
              </p>
            )}
          </div>

          {/* OTP */}
          <div className="mb-4">
            <label className="block text-sm text-[#737373] font-medium mb-2">
              Verify Otp.
            </label>
            <input
              type="number"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter Your otp"
              className="w-full px-4 py-3 rounded-lg text-[#262626] font-[500] border border-gray-300 bg-[#f5f5f5] focus:outline-none focus:ring-2 focus:ring-gray-300
                    [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
            />
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleLogin}
            disabled={!otp}
            className={`w-full py-3 rounded-lg font-semibold transition 
                ${
                  otp
                    ? "bg-black text-white hover:opacity-90"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
          >
            Sign In
          </button>
        </div>

        {/* Right Side (Image) */}
        <div className="py-6 px-10 md:flex flex-col flex-1 justify-between hidden rounded-3xl items-end relative max-w-[520px] 2xl:max-w-[720px]">
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
