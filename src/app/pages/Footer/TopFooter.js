import React from 'react';

function TopFooter() {
  return (
    <div
      className="relative bg-cover bg-center p-20"
      style={{
        backgroundImage: `url(https://s3-alpha-sig.figma.com/img/c32b/5212/dc55ca58380133e6e9a9a492ad63240b?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOXv1xDWiJrkvabw30KI9IvKSeoKI9G8TfV5~gB7-RB6uUoipR0lz-QzMIHs4RoIhuBYKfjeFn6MPlDZC3FB0P21n6oTJDMZ~N77aqmNwu7-Jc~yPAB3jRjK2gbJpUFS1iVGMwhtLrqwqaxPb0jbE6pyQ9~Te5s23AHNN7EkaBiCL2syRKoWSEkqG6YO6WppKb5xXPu0yQ8xcrtNLlSA4msWBJc-oHz5FPhpvWDGv~-rMWvXQ0b6It87F4o9KE3uITR~zpADGExXFbENmZ2i53PtNJLSmZszAeQ4LDkQ9-KAOQkf0g07OR1Fl07A2EszUupTY05nkOb2RINUkLOJ7A__)`,
      }}
    >
      {/* Color Overlay */}
      <div className="absolute inset-0 bg-[#002A3A] opacity-50"></div>

      {/* Footer Content */}
      <div className="relative z-10 p-4 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center p-10">
          <div className="flex flex-col gap-8 items-start justify-start ml-4 md:ml-28">
            <h6 className="text-5xl text-white">Let’s work Together</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
              tristique<br/> euismod rcu tristique nisl id nibh. viverra feugiat
              viverra. Lorem ipsum dolor sit<br/> amet consectetur.
            </p>
          </div>
       <div className='mt-5'>
       <button
  type="button"
  className="py-4 px-12 me-2 mb-2 text-lg font-semibold text-gray-900 bg-white rounded-xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100"
>
  View Vacancies
</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
