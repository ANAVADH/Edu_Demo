import React from 'react'

function NavBar() {
  return (
    <nav className="bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 start-0  border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://s3-alpha-sig.figma.com/img/c0b9/d5e7/05b631119b8108d75ed1289bb4c3e6dd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X0OC3c~jHDnLT4DRcOzabLBd0xncUBCQ6YCY-A0sf9dO7S5MQfDfX93R6XPilSjWIt63UjAgNWVmFBnfXB8Ch0xMie~WkXhk41cwI6syEp3ieXvm9FqbdOarmqILT~10ACxdE~tOdAonyNZeVaixWbOc~crEq2QrI0wCNPj6aDKq-hD3s8F~GVWxfaBb0v1K0TcV0-9eahsDIMUCs2m-MeUoTxiUYodyaBvvepLR8wJeEEHi7e6-TeJOqdjI8PPsUEoJelBAlPnlA3HjHd6GmngVM4K5-~pweVX~bAGoKLZKf-DS8ZOVfew-53-Ub7QzGV8p30DYc18sXG3kK72C7Q__" className="h-8" alt="Flowbite Logo" />
     
      </a>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          className="text-black bg-white hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Contact Us
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
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
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              How we Help
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Portfolios
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Insights
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar