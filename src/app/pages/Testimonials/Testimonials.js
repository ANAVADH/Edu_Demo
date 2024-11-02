import React from 'react'
import CardTestimonal from './CardTestimonal'

function Testimonials() {
  return (
    <div className='p-10 mt-10'>
      <div className="flex flex-wrap gap-8 md:gap-28 justify-center">
        <div className="flex flex-col text-black mt-2 items-center sm:items-start">
          <h5 className="text-3xl sm:text-4xl font-bold">8 Years</h5>
          <h5 className="text-lg sm:text-xl">of Success</h5>
        </div>
        <hr className="hidden sm:block w-0.5 h-16 mx-2 my-2 bg-gray-300 border-0 rounded dark:bg-gray-700" />
        <div className="flex flex-col text-black mt-2 items-center sm:items-start">
          <h5 className="text-3xl sm:text-4xl font-bold">200+</h5>
          <h5 className="text-lg sm:text-xl">Members</h5>
        </div>
        <hr className="hidden sm:block w-0.5 h-16 mx-2 my-2 bg-gray-300 border-0 rounded dark:bg-gray-700" />
        <div className="flex flex-col text-black mt-2 items-center sm:items-start">
          <h5 className="text-3xl sm:text-4xl font-bold">155+</h5>
          <h5 className="text-lg sm:text-xl">All Over The USA</h5>
        </div>
        <hr className="hidden sm:block w-0.5 h-16 mx-2 my-2 bg-gray-300 border-0 rounded dark:bg-gray-700" />
        <div className="flex flex-col text-black mt-2 items-center sm:items-start">
          <h5 className="text-3xl sm:text-4xl font-bold">200k</h5>
          <h5 className="text-lg sm:text-xl">Satisfied Clients</h5>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-start justify-start mt-28 ml-4 md:ml-28">
        <h6 className="text-5xl text-black ">Lorem Ipsum</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac<br /> habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae<br /> mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.</p>
      </div>
      <div className="mt-16 flex flex-wrap gap-6 justify-center sm:gap-8 lg:gap-12">
        <CardTestimonal slNo={'01'} />
        <CardTestimonal slNo={'02'} />
        <CardTestimonal slNo={'03'} isDark={true} />
      </div>
    </div>
  )
}

export default Testimonials