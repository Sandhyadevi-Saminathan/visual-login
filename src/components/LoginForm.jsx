import React from 'react';
import { Eye } from 'lucide-react';
import { Headset } from 'lucide-react';
import { Link, useNavigate  } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };
  return (
    <div
    className="flex overflow-x-hidden rounded-2xl shadow-lg"
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '1000px',
      height: '624px',
    }}
  >
  


      {/* Left Section */}
      <div className="w-1/2 bg-white px-16 py-12 flex flex-col justify-center">
        {/* Logo */}
        <h1
  className="text-[22px] font-light text-gray-500 mb-12 tracking-wide uppercase text-left"
  style={{ fontFamily: "'Playfair Display', serif" }}
>
  <span className="text-[30px]">V</span>isual <span className="text-[26px]">C</span>omfort & <span className="text-[26px]">C</span>o.
</h1>
<h2 className="text-base font-medium mb-6 text-left">Business Partner Login</h2>
        <form className="space-y-4" onSubmit={handleSignIn}>

          <div>
            <label className="text-sm text-gray-700 block mb-2 text-left">E-mail</label>
            <input
  type="email"
  placeholder="example@gmail.com"
  className="w-full px-4 py-2 border border-gray-300 rounded text-sm placeholder:text-gray-400 bg-white"
/>
          </div>
          <div>
            <label className="text-sm text-gray-700 block mb-2 text-left">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-black bg-[#F5F5F5]"
                />
              <Eye className="absolute right-3 top-3 w-5 h-5 text-gray-400 cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2 text-gray-500 text-xs">
  <input type="checkbox" className="w-4 h-4" />
  Remember me
</label>

<Link to="/forgot-password" className="text-[#1A4D2E] text-xs underline hover:opacity-80">
  Forgot Password?
</Link>
          </div>

          <button
  type="submit"
  className="w-full bg-[#282021] hover:bg-[#1f1413] text-white py-2.5 rounded-md text-sm font-medium tracking-wide mt-5"
>
  Sign In
</button>
        </form>
      </div>

      {/* Right Section */}
 
<div className="w-1/2 bg-[#3E2F2D] text-white relative flex flex-col items-center justify-center px-12 overflow-hidden">

  {/* Support link (top-right) */}
  <div className="absolute top-6 right-30 flex items-center gap-2 text-white text-sm hover:opacity-80 z-10">
    <Headset className="w-5 h-5" />
    <span>Support</span>
  </div>
  <img
  src="/Ellipse 1.png"
  alt="Background ellipse"
  className="absolute"
  style={{
    top: '-60px',
    right: '-100px',
    width: '400px',
    height: '400px',
    zIndex: 1, // behind lamp box
    pointerEvents: 'none',
  }}
/>

  {/* Image box (rectangle) */}
  <div
    className="relative bg-white shadow-lg p-4 mb-8 z-10"
    style={{
      width: '350px',
      height: '250px',
      borderRadius: '10px',
    }}
  >
    {/* Image in top-left */}
    <img
      src="/lamp.png"
      alt="Lamp"
      className="w-44 object-contain"
    />

    {/* Blurred orange circle in bottom-right */}
    <div
      className="absolute"
      style={{
        bottom: '10px',
        right: '10px',
        width: '125px',
        height: '125px',
        backgroundColor: 'rgba(255, 165, 0, 0.3)',
        borderRadius: '9999px',
        filter: 'blur(24px)',
        pointerEvents: 'none',
      }}
    />
  </div>

  {/* Text Content */}
  <h2 className="text-[22px] font-semibold text-center mb-4 leading-snug">
    Elevate Your Business with Visual Comfort & Co
  </h2>
  <p className="text-xs text-center text-gray-300 max-w-[280px] mb-4">
    Exclusive access to premium lighting collections, tailored pricing, and seamless order management.
  </p>

  <div className="flex items-center justify-center space-x-4 bg-[#3a2f2f] py-4">
  {/* Left Arrow */}
  <button className="text-white opacity-60 hover:opacity-100 text-xl">
    &#10094;
  </button>

  {/* Dot 1 */}
  <span className="w-2 h-2 bg-white rounded-full opacity-40"></span>

  {/* Static Half-filled Circle (Not spinning) */}
  <span className="text-white text-sm">◐</span>

  {/* Dot 3 */}
  <span className="w-2 h-2 bg-white rounded-full opacity-40"></span>

  {/* Right Arrow */}
  <button className="text-white opacity-60 hover:opacity-100 text-xl">
    &#10095;
  </button>
</div>
</div>
    </div>
  );
};

export default LoginForm;