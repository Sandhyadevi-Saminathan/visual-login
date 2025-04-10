import { CheckCircle } from "lucide-react";

const PasswordChanged = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212]">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">
        <div className="flex justify-center items-center mb-4">
          <CheckCircle className="h-12 w-12 text-green-700" />
        </div>
        <h2 className="text-2xl font-semibold text-[#282021] mb-2">
          Changed successfully
        </h2>
        <p className="text-sm text-black-600 mb-6">
         Your password has been changed successfully.<br/>
            Please login with your new password to access your account.
        </p>
        <button
          className="w-full bg-[#282021] text-white py-2 rounded-lg hover:bg-[#1f1a1a] transition"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Take me to Login
        </button>
      </div>
    </div>
  );
};

export default PasswordChanged;
