import React from 'react';


function InsightsCard({ imageSrc, heading, description }) {
  return (
    <div className="relative w-[350px] h-[480px] rounded-[17px] overflow-hidden">
      <img
        src={imageSrc}
        alt={heading}
        className="w-full h-full object-cover rounded-[17px] opacity-100"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black opacity-80" />
      <div className="absolute py-3 flex flex-col gap-2 bottom-4 px-4 text-white">
        <p className="mt-1 text-sm opacity-80">{heading}</p>
        <h2 className="text-xl ">{description}</h2>
        <p className="mt-1 text-sm ">Read More</p>
      </div>
    </div>
  );
}

export default InsightsCard;
