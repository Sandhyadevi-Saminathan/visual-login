
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell, BarChart, Bar,CartesianGrid
  } from 'recharts';
  
  import { FaCircle } from 'react-icons/fa';
  import { MdOutlineFileDownload } from "react-icons/md";
import { BellIcon, MoonIcon, Star} from 'lucide-react';
import { ChevronsDown, ChevronsUp, ChevronDown, TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from 'react';
  const pieData = [
    { name: 'United States', value: 52.1 },
    { name: 'Canada', value: 22.8 },
    { name: 'Mexico', value: 13.5 },
    { name: 'Other', value: 11.6 },
  ];
 
  const COLORS = ['#3A2D2D', '#A89D9D', '#D5CFCF', '#F0EEEE'];
  
  const lineData = [
    { month: 'Jan', thisYear: 8000, lastYear: 7000 },
    { month: 'Feb', thisYear: 14000, lastYear: 12000 },
    { month: 'Mar', thisYear: 15000, lastYear: 13000 },
    { month: 'Apr', thisYear: 22000, lastYear: 11000 },
    { month: 'May', thisYear: 24000, lastYear: 18000 },
    { month: 'Jun', thisYear: 20000, lastYear: 21000 },
    { month: 'Jul', thisYear: 23000, lastYear: 26000 },
  ];
  
  const barData = [
    { name: 'Jan', value: 18000 },
    { name: 'Feb', value: 15000 },
    { name: 'Mar', value: 20000 },
    { name: 'Apr', value: 25000 },
    { name: 'May', value: 19000 },
    { name: 'Jun', value: 23000 },
    { name: 'Jul', value: 26000 },
    { name: 'Aug', value: 20000 },
    { name: 'Sep', value: 23000 },
    { name: 'Oct', value: 25000 },
    { name: 'Nov', value: 21000 },
    { name: 'Dec', value: 27000 },
  ];
  const yAxisTicks = [0, 10000, 20000, 30000]; 
  
  
  export default function Dashboard() {
    const [expanded, setExpanded] = useState(true);
    const [openDropdown, setOpenDropdown] = useState(null); // for toggling dropdown

    const handleDropdownToggle = (label) => {
      setOpenDropdown((prev) => (prev === label ? null : label));
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
          const clickedDropdown = e.target.closest(".search-dropdown");
          const clickedIcon = e.target.closest(".search-icon-container");
    
          if (!clickedDropdown && !clickedIcon) {
            setOpenDropdown(null);
          }
        };
    
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
      }, []);

    const icons = [
        { label: "Dashboard", icon: "/icons/Dashboard.svg" },
        { label: "Quick Links", icon: "/icons/QuickLinks.svg", dropdown: true },
        {
          label: "Search",
          icon: "/icons/Search.svg",
          dropdown: true,
          options: ["Stock Lookup", "Documents"],
        },
        { label: "Stock Lookup", icon: "/icons/StackLookup.svg" },
        { label: "Parts Lookup", icon: "/icons/PartLookup.svg" },
        { label: "Co-Op", icon: "/icons/co-op.svg", dropdown: true },
        { label: "Sales Inside 2.0", icon: "/icons/sales inside.svg" },
        { label: "Commission Report", icon: "/icons/Commisionreport.svg" },
        { label: "Document", icon: "/icons/Document.svg", dropdown: true },
        { label: "User Maintenance", icon: "/icons/User.svg", dropdown: true },
        { label: "My Settings", icon: "/icons/Settings.svg" },
      ];
    return (
      <div className="p-6 bg-[#F5F5F5] min-h-screen space-y-6 font-sans h">
        <div className="bg-white 2xl shadow-md p-6">
        {/* Top Nav */}
        <div className="flex justify-between items-center px-6 py-4">
  {/* Left: Partner Insights */}
  <div className="text-[18px] font-medium text-gray-600">Partner Insights</div>

  {/* Center: Logo/Title */}
  <h1
    className="text-[22px] font-light text-gray-500 tracking-wide uppercase text-center leading-none"
    style={{ fontFamily: "'Playfair Display', serif" }}
  >
    <span className="text-[30px]">V</span>isual <span className="text-[26px]">C</span>omfort & <span className="text-[26px]">C</span>o.
  </h1>

  {/* Right: Icons */}
  <div className="flex items-center gap-3">
    {/* Dark Mode Icon */}
    <div className="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
      <MoonIcon className="w-5 h-5 text-gray-700" />
    </div>

    {/* Notification Icon with Red Dot */}
    <div className="relative w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center">
      <BellIcon className="w-5 h-5 text-gray-700" />
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
    </div>

    {/* Profile Icon */}
    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-semibold text-[15px]">
      P
    </div>
  </div>
</div>



<div className="relative flex flex-col items-center">
  {/* Icon Box */}
  <div
    className={`bg-white border border-gray-200 rounded-2xl mt-4 transition-all duration-300 ${
      expanded ? "h-24" : "h-20"
    } w-full`}
  >
    <div className="flex gap-12 whitespace-nowrap justify-center px-4 py-3">
      {icons.map((item, index) => {
        const isDashboard = item.label === "Dashboard";
        const isOpen = openDropdown === item.label;

        return (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center text-[11px] min-w-[80px] px-2 py-1 text-gray-600 hover:text-black ${
              isDashboard ? "border border-gray-300 rounded-xl" : ""
            }`}
          >
     <button
  className="flex flex-col items-center focus:outline-none relative"
  onClick={() => {
    if (item.dropdown) {
      handleDropdownToggle(item.label);
    }
  }}
>
  <div className="relative w-7 h-7 mb-1 flex items-center justify-center">
    <img src={item.icon} alt={item.label} className="w-full h-full" />

    {/* Dropdown Chevron when collapsed */}
    {!expanded && item.dropdown && (
      <div
        className="absolute left-[32px] top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation(); // Prevent bubbling to parent
          handleDropdownToggle(item.label);
        }}
      >
        <ChevronDown size={12} />
      </div>
    )}
  </div>

  {/* Label + Chevron when expanded */}
  {expanded && (
    <div
      className="flex items-center gap-1 cursor-pointer"
      onClick={(e) => {
        if (item.dropdown) {
          e.stopPropagation();
          handleDropdownToggle(item.label);
        }
      }}
    >
      <span className="text-center leading-tight">{item.label}</span>
      {item.dropdown && <ChevronDown size={12} className="text-gray-500" />}
    </div>
  )}
</button>



            {/* Dropdown menu */}
            {item.dropdown && isOpen && item.options && (
             <div
             className={`absolute z-50 bg-white border border-gray-300 rounded-xl shadow text-[11px] min-w-[110px] p-2
             ${expanded ? "top-[64px] left-1/2 -translate-x-1/2" : "top-[40px] left-1/2 -translate-x-1/2"}
           `}
           >
                <ul className="space-y-1">
                  {item.options.map((opt, idx) => (
                    <li key={idx} className="hover:text-black cursor-pointer">
                      {opt}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>

  {/* Expand/Collapse Button */}
  <button
    onClick={() => setExpanded(!expanded)}
    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center shadow"
  >
    {expanded ? (
      <ChevronsUp size={16} className="text-gray-700" />
    ) : (
      <ChevronsDown size={16} className="text-gray-700" />
    )}
  </button>
</div>


<div className="flex justify-between mt-4 mb-3">
  {/* Left Side - Search Box */}
  <div className="w-full mt-3">
    {/* Search Box */}
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search Stock Lookup | Documents"
        className="w-80 h-10 pl-10 pr-2 text-m text-black border border-gray-300 rounded-md focus:outline-none"
      />
      {/* Search Icon */}
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4">
        <img
          src="/icons/Search.svg" 
          alt="Search"
          className="w-full h-full"
        />
      </div>
    </div>

    {/* Dashboard Heading - Below the Search Box */}
    <h2 className="text-2xl font-semibold text-gray-800 mt-9 mb-2">Dashboard</h2> {/* Dashboard Heading */}
  </div>

  {/* Right Side - Banner */}
  <div className="bg-[#F5F7FA] border border-gray-200 p-4 rounded-2xl text-xs max-w-[700px] w-full">
    Note: Effective October 28th, 2024, we will be launching the new Payment Portal SnapPay.
    <div className="space-y-2 mt-1">  </div>
    In preparation for the new payment portal, our current payment portal will be in maintenance mode beginning midnight October 24th, through Monday, October 28th.
    <div className="space-y-2 mt-1">  </div>
    Please note you will need to complete a new registration form on SnapPay to process your payments.
    <div className="space-y-2 mt-1">  </div>
    Thank you for your patience and cooperation.
  </div>
</div>
        {/* Top Stats */}

<div className="grid grid-cols-4 gap-4">
  {[
    { title: 'Total Customer', value: '7,265', change: '+11.01%' },
    { title: 'Total Orders', value: '3,671', change: '-0.03%' },
    { title: 'Total Stock', value: '15,689', change: '+15.03%' },
    { title: 'Parts Lookup', value: '2,318', change: '+4.06%' },
  ].map((item, i) => (
    <div
      key={i}
      className={`rounded-2xl p-4 ${
        i % 2 === 0 ? 'bg-[#F5F2F1]' : 'bg-[#E5E0DC]'
      }`}
    >
      <div className="text-xl text-black">{item.title}</div>
      <div className="text-2xl font-semibold mt-3">{item.value}</div>
      <div className="text-xs text-right text-gray-500 flex items-center justify-end">
        {item.change}
        {item.change.startsWith('+') ? (
          <TrendingUp size={14} className="ml-2 text-black" />
        ) : item.change.startsWith('-') ? (
          <TrendingUp size={14} className="ml-2 text-black transform rotate-180" />
        ) : null}
      </div>
    </div>
  ))}
</div>

<div className="flex flex-wrap gap-8 mt-5">
  {/* First Box (Line Chart with larger width) */}
  <div className="w-full sm:w-[600px] lg:w-[600px] h-[300px] bg-[#F9F9FA] border-gray-200 rounded-xl p-4">
  <div className="flex items-center space-x-4 mb-2">
    {/* Total Customer (Black) */}
    <div className="text-sm font-semibold text-black">Total Customer</div>
    
    {/* Total Order, Total Sales, Total Parts (Gray) */}
    <div className="text-sm text-gray-600">Total Order</div>
    <div className="text-sm text-gray-600">Total Sales</div>
    <div className="text-sm text-gray-600">Total Parts</div>
    
    {/* Vertical Line Separator */}
    <div className="text-sm text-gray-600">|</div>

    {/* This year with Black Dot */}
    <div className="flex items-center text-sm text-black">
      <FaCircle className="text-black mr-2" />
      This year
    </div>

    {/* Last year with Blue Dot */}
    <div className="flex items-center text-sm text-black">
      <FaCircle className="text-blue-600 mr-2" />
      Last year
    </div>
  </div>

  {/* Chart */}
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={lineData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
      <CartesianGrid stroke="none" /> {/* No grid lines */}
      <XAxis 
        dataKey="month" 
        axisLine={false}  // No X-axis line
        tickLine={false}  // No X-axis ticks
        padding={{ left: 70, right: 20 }}  // Adds padding for gap between X and Y axes
      />
      <YAxis
        ticks={yAxisTicks}
        tickFormatter={(tick) => `${tick / 1000}K`} // Format Y-axis ticks to display in 'K'
        axisLine={false}  // No Y-axis line
        tickLine={false}  // No Y-axis ticks
        padding={{ top: 20, bottom: 20, right: 20 }} // Adds padding for gap between X and Y axes
        // Moves Y-axis to the left
        mirror={true} // Set to true to move Y-axis to the left
      />
      <Tooltip />
      {/* Smooth Curves */}
      <Line type="monotone" dataKey="thisYear" stroke="#000" strokeWidth={2} dot={false} />
      <Line type="monotone" dataKey="lastYear" stroke="#007BFF" strokeWidth={2} dot={false} />
    </LineChart>
  </ResponsiveContainer>
</div>


  {/* Second Box (Website Traffic with smaller width) */}
  <div className="bg-[#F9F9FA] p-4 rounded-2xl shadow-md w-full sm:w-[250px] lg:w-[250px] h-[300px]">
  <div className="text-sm font-semibold mb-4">Traffic by Website</div>
  {['Google', 'YouTube', 'Instagram', 'Pinterest', 'Facebook', 'Twitter'].map((platform, i) => (
    <div key={i} className="flex items-center justify-between mb-4">
      <span className="text-sm text-black">{platform}</span>
      <div className="flex gap-[4px]">
        <div className="h-[6px] w-[12px] rounded-full bg-black" />
        <div className="h-[6px] w-[12px] rounded-full bg-gray-600" />
        <div className="h-[6px] w-[12px] rounded-full bg-gray-300" />
      </div>
    </div>
  ))}
</div>

  {/* Third Box (Documents with medium width) */}
  <div className="bg-[#F9F9FA] p-4 rounded-2xl shadow-md w-full sm:w-[400px] lg:w-[500px] h-[300px]">
  <div className="text-sm mb-2">Documents</div>
  {[
    'Partners Insight Dashboard Video.mp4',
    'Stock & Availability Video.mp4',
    'My accounts order - RGA and RGAs Video.mp4',
    'Acknowledgement Notification Video.mp4',
  ].map((doc, i) => (
    <div key={i} className="flex items-center justify-between py-2 border-b last:border-none">
      
      {/* Left: Icon + filename */}
      <div className="flex items-center gap-2">
        <img src="/icons/file.svg" alt="MP4 Icon" className="w-6 h-6 text-blue-500" />
        <span className="text-sm text-gray-700">{doc}</span>
      </div>

      {/* Right: Download + Star */}
      <div className="flex items-center gap-3">
        <MdOutlineFileDownload className="text-lg cursor-pointer" />
        <Star />
      </div>
    </div>
  ))}
</div>
</div>
    {/* Lower Section */}
        <div className="grid grid-cols-3 gap-4 mt-5">
  {/* Traffic by Location (Pie Chart with Labels on Side) */}
  <div className="bg-[#F9F9FA] p-4 rounded-2xl shadow-md w-full h-[300px]">
  <h3 className="mb-2">Traffic by Location</h3>
  <div className="flex justify-between items-center">
    {/* Pie chart */}
    <ResponsiveContainer width="50%" height={200}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={40}   // Reduced size of the circle
          outerRadius={60}   // Reduced size of the circle
          fill="#8884d8"
        >
          {pieData.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

    {/* Counter names on the side */}
    <div className="flex flex-col ml-4">
      {pieData.map((item, i) => (
        <div key={i} className="text-xs flex items-center space-x-2">
          {/* Even smaller dot */}
          <div
            className="w-1 h-1 rounded-full"  // Even smaller dot
            style={{ backgroundColor: COLORS[i % COLORS.length] }}
          ></div>
          <div className="flex justify-between w-[150px]">  {/* Adjust width for spacing */}
            <span>{item.name}</span> 
            <span>{item.value}%</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  {/* Marketing & SEO (Bar Chart with No X & Y Axis Lines) */}
  <div className="bg-[#F9F9FA] p-4 rounded-2xl shadow-md col-span-2 w-full h-[300px]">
  <h3 className="text-lg mb-2">Marketing & SEO</h3>
  <ResponsiveContainer width="100%" height={200}>
    <BarChart 
      data={barData}
      margin={{ left: 30, right: 30, top: 10, bottom: 10 }}
       barCategoryGap="20%"
    >
      {/* Remove X and Y Axis Lines */}
      <XAxis 
        dataKey="name" 
        axisLine={false}  // Hides the X axis line
        tickLine={false}  // Hides the X axis ticks
        margin={{  right: 30, top: 10}}
      />
      <YAxis
        ticks={yAxisTicks}
        tickFormatter={(tick) => `${tick / 1000}K`} // Format Y-axis ticks to display in 'K'
        axisLine={false}  // No Y-axis line
        tickLine={false}  // No Y-axis ticks
        padding={{ top: 20, bottom: 20, right: 90 }} // Adds padding for gap between X and Y axes
        
      />
      <Tooltip />
      <Bar 
        dataKey="value" 
        fill="#5A3D32" 
        radius={[6, 6, 0, 0]} 
        barSize={25}  // Thinner bars to ensure they don't overlap
      >
         {barData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={[
            "#765E58", "#988277", "#3E3232", "#CDC2BB", "#AF9F95", "#524241",
            "#765E58", "#988277", "#3E3232", "#CDC2BB", "#AF9F95", "#524241"
          ][index % 12]} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
</div>
</div>
        </div>
      </div>
    );
  }
  