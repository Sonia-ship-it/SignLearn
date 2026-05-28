"use client";
import { useState } from "react";

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState(100);

  return (
    <section id="donate" className="py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Secure Donation
            </h2>
            <p className="text-gray-600">Your contribution makes a difference</p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Donation Amount
              </label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {[25, 50, 100, 250].map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setSelectedAmount(amount)}
                    className={`py-2 border-2 rounded-lg transition ${
                      selectedAmount === amount
                        ? "border-teal-700 text-teal-700"
                        : "border-gray-300 hover:border-teal-700 hover:text-teal-700"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="Custom amount"
                value={selectedAmount}
                onChange={(e) => setSelectedAmount(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Payment Method
              </label>
              <div className="flex gap-2 mb-3">
                <button
                  type="button"
                  className="flex-1 py-2 border-2 border-teal-700 text-teal-700 rounded-lg font-medium"
                >
                  Card
                </button>
                <button
                  type="button"
                  className="flex-1 py-2 border-2 border-gray-300 rounded-lg hover:border-teal-700 hover:text-teal-700 transition"
                >
                  PayPal
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-4 rounded-full hover:bg-teal-800 transition font-semibold flex items-center justify-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Confirm Donation
            </button>

            <p className="text-xs text-gray-500 text-center">
              Your donation is secure and encrypted. We respect your privacy and
              will never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
