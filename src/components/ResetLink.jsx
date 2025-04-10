import React from "react";
import mailCheckIcon from '../assets/mail-check.svg'; // adjust path if needed
import { useNavigate } from "react-router-dom";

const ResetLink = () => {
    const navigate = useNavigate();

  const handleDone = () => {
    navigate('/reset-password');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-white rounded-2xl shadow-2xl px-10 py-12 w-[500px] text-center">
        <div className="flex justify-center mb-6">
          <img
            src={mailCheckIcon}
            alt="Mail with Check"
            className="w-12 h-12"
          />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Reset Link</h2>
        <p className="text-sm text-black mb-8">
          Your password reset link has been sent to you email. <br />
          Please click the link and redirect to the new <br />
          password set up page.
        </p>
        <button 
         onClick={handleDone}
         className="w-full bg-[#282021] text-white py-2 rounded-lg hover:bg-gray-700 transition duration-200">
          Done
        </button>
       
      </div>
    </div>
  );
};

export default ResetLink;
