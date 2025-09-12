import React from "react";

const Billing = () => {
  return (
    <div className="space-y-8">
      {/* Billing Plan */}
      <div>
        <h2 className="text-[20px] font-bold text-gray-900 mb-4">Billing</h2>
        <div className="flex justify-between items-center bg-gray-100 rounded-lg p-4">
          <div>
            <h3 className="text-[16px] font-[700] flex items-center gap-2">
              Business board basic{" "}
              <span className="px-2 py-0.5 text-[12px] rounded bg-green-100 text-green-600 font-medium">
                Active
              </span>
            </h3>
            <p className="text-gray-600 text-[14px] font-semibold mt-1">
              Billing monthly | Next payment on{" "}
              <span className="font-medium">02/10/2025</span> for{" "}
              <span className="font-semibold text-[#171717]">$59.90</span>
            </p>
          </div>
          <button className="px-4 py-2 bg-[#18181b] font-semibold whitespace-nowrap flex items-center hover:bg-gray-800 text-white rounded-[.75rem] text-[14px]">
            Change plan
          </button>
        </div>
      </div>

      {/* Payment Method */}
      <div>
        <h3 className="text-[1.125rem] font-[700] text-[#171717] mb-3">
          Payment method
        </h3>

        {/* Card 1 */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="w-10"
            />
            <div>
              <p className="font-medium text-gray-900 text-[14px]">
                Carolyn Perkins •••• 0392{" "}
                <span className="ml-2 px-2 py-0.5 text-[12px] bg-gray-100 rounded">
                  Primary
                </span>
              </p>
              <p className="text-gray-500 text-[13px]">Expired Dec 2025</p>
            </div>
          </div>
          <button className="font-bold text-center cursor-pointer whitespace-nowrap bg-white border border-gray-300 ring-primary
                hover:border-primary hover:ring-1 hover:text-primary text-gray-600 h-10 rounded-xl px-3 py-2 text-[16px] button-press-feedback">
            Edit
          </button>
        </div>

        {/* Card 2 */}
        <div className="flex justify-between items-center py-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
              alt="MasterCard"
              className="w-10"
            />
            <div>
              <p className="font-medium text-gray-900 text-[14px]">
                Carolyn Perkins •••• 8461
              </p>
              <p className="text-gray-500 text-[13px]">Expired Jun 2025</p>
            </div>
          </div>
          <button className="font-bold text-center cursor-pointer whitespace-nowrap bg-white border border-gray-300 ring-primary
             hover:border-primary hover:ring-1 hover:text-primary text-gray-600 h-10 rounded-xl px-3 py-2 text-[16px] button-press-feedback">
            Edit
          </button>
        </div>

        {/* Add payment method */}
        <button className="mt-3 text-[#737373] font-bold text-[16px] cursor-pointer hover:text-gray-900">
          + Add payment method
        </button>
      </div>

      {/* Transaction History */}
      <div>
        <h3 className="text-[20px] font-bold text-[#171717] mb-3">
          Transaction history
        </h3>
        <p className="text-gray-500 text-[13px]">No transactions yet.</p>
      </div>
    </div>
  );
};

export default Billing;
