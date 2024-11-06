'use client'
import React, { useState, useEffect } from 'react';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 ${
        isScrolled ? 'bg-black/80' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://s3-alpha-sig.figma.com/img/c0b9/d5e7/05b631119b8108d75ed1289bb4c3e6dd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X0OC3c~jHDnLT4DRcOzabLBd0xncUBCQ6YCY-A0sf9dO7S5MQfDfX93R6XPilSjWIt63UjAgNWVmFBnfXB8Ch0xMie~WkXhk41cwI6syEp3ieXvm9FqbdOarmqILT~10ACxdE~tOdAonyNZeVaixWbOc~crEq2QrI0wCNPj6aDKq-hD3s8F~GVWxfaBb0v1K0TcV0-9eahsDIMUCs2m-MeUoTxiUYodyaBvvepLR8wJeEEHi7e6-TeJOqdjI8PPsUEoJelBAlPnlA3HjHd6GmngVM4K5-~pweVX~bAGoKLZKf-DS8ZOVfew-53-Ub7QzGV8p30DYc18sXG3kK72C7Q__"
            className="h-8"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-gray-800 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact Us
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li><a href="#" className="block py-2 px-3 text-white hover:text-blue-700 rounded md:p-0 dark:text-white md:dark:text-blue-500">About Us</a></li>
            <li><a href="#" className="block py-2 px-3 text-white hover:text-blue-700 rounded md:p-0 dark:text-white md:dark:hover:text-blue-500">How we Help</a></li>
            <li><a href="#" className="block py-2 px-3 text-white hover:text-blue-700 rounded md:p-0 dark:text-white md:dark:hover:text-blue-500">Pricing</a></li>
            <li><a href="#" className="block py-2 px-3 text-white hover:text-blue-700 rounded md:p-0 dark:text-white md:dark:hover:text-blue-500">Portfolios</a></li>
            <li><a href="#" className="block py-2 px-3 text-white hover:text-blue-700 rounded md:p-0 dark:text-white md:dark:hover:text-blue-500">Testimonials</a></li>
            <li><a href="#" className="block py-2 px-3 text-white hover:text-blue-700 rounded md:p-0 dark:text-white md:dark:hover:text-blue-500">Insights</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;


