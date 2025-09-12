import React, { useState } from "react";

const Security = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password Change Request:", formData);
  };

  return (
    <div className="space-y-6 mb-2">
      {/* Heading */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Password</h2>
        <p className="text-[#737373] mt-1 font-[500] text-[.875rem]">
          Remember, your password is your digital key to your account. Keep it
          safe, keep it secure!
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current password
          </label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full rounded-xl bg-gray-100 p-3 border border-transparent focus:border-gray-300 focus:bg-white outline-none transition"
          />
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New password
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full rounded-xl bg-gray-100 p-3 border border-transparent focus:border-gray-300 focus:bg-white outline-none transition"
          />
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm new password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full rounded-xl bg-gray-100 p-3 border border-transparent focus:border-gray-300 focus:bg-white outline-none transition"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#18181b] text-white rounded-[.75rem] font-semibold whitespace-nowrap flex items-center hover:bg-gray-800 h-12 px-5 py-2"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Security;
