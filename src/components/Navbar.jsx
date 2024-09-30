import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageIcon from '@/assets/Language.png';
import SearchIcon from '@/assets/Search.png';
import HeartIcon from '@/assets/Heart.png';
import CartIcon from '@/assets/Cart.png';
import ProfileIcon from '@/assets/Profile.png';
import { AiFillGoogleCircle } from 'react-icons/ai'; // Google icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Eye and eye-slash icons
import { AiOutlineLogin, AiOutlineUser } from 'react-icons/ai'; // Login and User icons

const Navbar = ({ openModal }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [showUserTypeBar, setShowUserTypeBar] = useState(true);
  const [userType, setUserType] = useState('');
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isNewModalOpen, setNewModalOpen] = useState(false); // State for the new "Register" modal
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State for the new "Login" modal
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const openRegisterModal = (e) => {
    e.preventDefault();
    setNewModalOpen(true);
  };

  const closeRegisterModal = () => {
    setNewModalOpen(false);
  };

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    setShowUserTypeBar(false);
  };

  const handleCloseUserTypeBar = () => {
    setShowUserTypeBar(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <nav className="bg-neutral-800 text-white w-full py-4 fixed top-0 left-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-6">
            <div className="text-2xl font-bold">EGA</div>

            <div className="flex items-center bg-gray-600 rounded-full px-3 py-1 h-8 w-48">
              <img src={SearchIcon} alt="Search" className="w-4 h-4 mr-2" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white outline-none text-sm w-full"
              />
            </div>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-green-600 transition duration-300"> Home</Link>
              </li>
              <li>
                <Link to="/Filter" className="hover:text-green-600 transition duration-300"> Filter</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/cart">
              <img src={CartIcon} alt="Cart" className="w-6 h-6 cursor-pointer" />
            </Link>

            <img src={HeartIcon} alt="Favorites" className="w-6 h-6 cursor-pointer" onClick={() => alert('Favorites clicked')} />

            <img src={LanguageIcon} alt="Language" className="w-6 h-6 cursor-pointer" onClick={() => alert('Language clicked')} />

            <div className="relative">
              <img src={ProfileIcon} alt="Profile" className="w-6 h-6 cursor-pointer" onClick={toggleProfileDropdown} />

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                  <div className="flex flex-col p-4">
                    <button
                      onClick={openRegisterModal}
                      className="text-left bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 mb-2 rounded"
                    >
                      Register
                    </button>
                    <button
                      onClick={openLoginModal}
                      className="text-left bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 mb-2 rounded"
                    >
                      Login
                    </button>
                    <a
                      href="/contact"
                      onClick={openModal}
                      className="text-left text-blue-600 hover:underline py-2 px-4"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* User Type Selection Bar */}
      {showUserTypeBar && (
        <div className="border border-gray-300 text-white w-3/4 rounded-3xl py-1.5 mt-16 ml-16 shadow-lg border-gray-500">
          <div className="container mx-auto flex justify-between items-center px-6">
            <span>For better experience, please choose which user type you are:</span>
            <div className="flex space-x-4">
              <button
                className="bg-gray-600 text-white px-5 py-1 rounded-3xl hover:bg-gray-700 transition duration-300"
                onClick={() => handleUserTypeSelection('Parent')}
              >
                Parent
              </button>
              <button
                className="bg-gray-600 text-white px-5 py-1 rounded-3xl hover:bg-gray-700 transition duration-300"
                onClick={() => handleUserTypeSelection('Adult')}
              >
                Adult
              </button>
            </div>
            <button className="text-gray-400 hover:text-white" onClick={handleCloseUserTypeBar}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Display user choice */}
      {userType && !showUserTypeBar && (
        <div className="bg-gray-600 text-white w-full py-2 shadow-lg">
          <div className="container mx-auto flex justify-between items-center px-6">
            <span>User Type Selected: {userType}</span>
            <button className="text-gray-400 hover:text-white" onClick={() => setUserType('')}>
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Register Modal Implementation */}
      {isNewModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">Welcome to the Registration Modal</h2>
            <form className="modal-form">
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-700">Name</label>
                <input type="text" className="w-full p-2 border rounded-md focus:outline-none" placeholder="Enter your name" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded-md focus:outline-none" placeholder="Enter your email" />
              </div>
              <button type="button" className="w-full bg-green-500 hover:bg-green-600 text-white p-2 rounded-md font-bold mb-3">Register</button>
              <button type="button" className="w-full bg-gray-200 text-gray-700 p-2 rounded-md flex items-center justify-center mb-3">
                <AiFillGoogleCircle className="mr-2 text-red-500" />
                Sign up with Google
              </button>
            </form>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={closeRegisterModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Login Modal Implementation */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-xl font-bold mb-4">Welcome to the Login Modal</h2>
            <form className="modal-form">
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded-md focus:outline-none" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="w-full p-2 border rounded-md focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <button type="button" className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              <button type="button" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md font-bold mb-3">Login</button>
            </form>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={closeLoginModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
