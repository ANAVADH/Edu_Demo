import React from 'react';

function CardTestimonial({ isDark , slNo }) {
  return (
    <div>
      <a
        href="#"
        className={`block max-w-sm p-6 border rounded-lg shadow hover:bg-gray-100 ${
          isDark
            ? 'bg-darkCardBg border-gray-700 text-white hover:bg-gray-700'
            : 'bg-cardbg border-gray-200 text-gray-900'
        }`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{slNo}</h5>
        <hr className="w-80 h-0.5 my-4 bg-gray-400 rounded md:my-6 dark:bg-gray-700" />
        <h5 className="mb-2 text-2xl font-bold tracking-tight">
          Lorem ipsum dolor sit amet,<br /> consectetur
        </h5>
        <p className={`font-normal ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea
          dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit
          lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis
          sagittis. Sed sit amet aliquam augue.
        </p>
      </a>
    </div>
  );
}

export default CardTestimonial;
