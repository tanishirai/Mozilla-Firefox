import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#28297D] text-white">
      {/* Footer Content */}
      <div className="footer p-11 max-w-7xl mx-auto">
        {/* First Column: Club Logo */}
        <div className="flex justify-center items-center mt-10">
          <img
            src="/assets/favicon.png" // Replace with your club logo path
            alt="Club Logo"
            className="w-24 h-24 animate-bounce"
          />
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F72585]"
            />
            <button className="btn bg-[#1267CC] hover:bg-[#440b69] text-white hover:text-[#ffffff] transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Join Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">JOIN US</h2>
          <ul className="space-y-2">
            <li>
              <a href="/login" className="hover:text-[#4361EE] transition-colors duration-300">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-[#4361EE] transition-colors duration-300">
                Register
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">CONTACT US</h2>
          <ul className="space-y-2">
            <li>
              <a href="mailto:abc39@gmail.com" className="hover:text-[#4361EE] transition-colors duration-300">
                abc39@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:xyz47@gmail.com" className="hover:text-[#4361EE] transition-colors duration-300">
                xyz47@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-lg font-bold mb-2">FOLLOW US</h2>
          <div className="flex gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300"
            >
              <i className="fa-brands fa-linkedin fa-xl text-gray-800 hover:text-blue-700"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300"
            >
              <i className="fa-brands fa-github fa-xl text-gray-800 hover:text-black"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-150 transition-transform duration-300"
            >
              <i className="fa-brands fa-instagram fa-xl text-pink-600 hover:text-pink-700"></i>
            </a>
          </div>
        </div>


      </div>

      {/* Copyright Section */}
      <div className="footer-center p-2 bg-[#1D1E5C] text-white w-full">
        <aside>
          <p>Copyright © {currentYear} - All rights reserved by Mozilla Firefox Club VIT-B</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;