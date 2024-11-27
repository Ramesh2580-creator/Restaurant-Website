import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className='flex justify-between items-center p-4 bg-white shadow-md'>
     <logo className="text-4xl font-bold text-red-500">Restaurant Website</logo>

      <div className='hidden md:flex space-x-6'>
        <ul className='flex space-x-6'>
          <Link to='/' className='hover:text-blue-500 cursor-pointer font-outfit'>Home</Link>
          <a href='#explore-menu' className='hover:text-blue-500 cursor-pointer'>Menu</a>
          <a href='#app-download' className='hover:text-blue-500 cursor-pointer'>Mobile App</a>
          <a href='#footer' className='hover:text-blue-500 cursor-pointer'>Contact Us</a>
        </ul>
      </div>
      <div className="flex space-x-4 items-center">
      {showSearch && (
        <input
          type='text'
          placeholder='Search...'
          className="ml-0 p-2 border border-gray-300 rounded-md shadow-md"
          onBlur={() => setShowSearch(false)}
           />
           
        )}
      <div className='flex items-center space-x-6'>
        <div className='relative flex items-center'>
          <img
            src={assets.search_icon}
            alt='Search'
            className='h-6 cursor-pointer'
            onClick={toggleSearch} />
        </div>
        </div>
        <div>
          <Link to="/cart">
            <img src={assets.basket_icon} alt='Basket' className='h-6 cursor-pointer' />
          </Link>
        </div>

        <button onClick={() => setShowLogin(true)} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition'>
          Sign In
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button className='text-gray-600 focus:outline-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
