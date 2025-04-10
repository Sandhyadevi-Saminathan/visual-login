import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    navigate("/reset-link"); // Navigate to reset password page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white px-12 py-10 rounded-2xl shadow-2xl w-[500px]">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Forgot Password</h2>
        <p className="text-sm text-gray-500 mb-6">
          Enter your email for the verification process. We’ll send a reset link to your inbox.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            type="submit"
            className="w-full bg-[#282021] text-white py-2.5 rounded-md hover:bg-[#1e1a18] transition duration-200"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
