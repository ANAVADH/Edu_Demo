import React from 'react';

function ImageCard() {
  return (
    <div className="p-6  max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-lg font-bold">Lorem Ipsum?</h5>
      <div className="relative mt-2">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-80 object-cover"
            src="https://s3-alpha-sig.figma.com/img/f604/7851/395bc26ca762f5f51593220be3922daa?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EJY~8e-nUQykiG3QqUuWSDiA069LnQzoNhbXD3R1HyIcfVeWuQpSmlPql5jfq0UdVyGt54LjP5e3Sk0O7F5SXbMaWhIsm~wnEUoq49hr6Uj9nqqNNB7cICUlhwBPhLS4GI~zTWTBvN1bPy-UYGOu6zGVKNpUIiu~V65hfCDeWiiiBz9OzR-rG30tcX-ttTQBPLXEJkCuMuDfuMlqnAUoPmg4-erEXfrUODQocRsOCLOl6XN2Wrmp0lWVjuqqgjQU0vnldvbdXk8HwX3ikLGc6xWrR00~fyDFLImFnraUmQGbn8BDvgWQlCupm~b~YA2vwemMUAK0x4Kkskr3WxX9yw__"
            alt="Blog Image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white rounded-t-lg" />
          <div className="absolute bottom-0 p-5 text-gray-900 dark:text-white">
            <h5 className="text-lg font-bold tracking-tight">Lorem Ipsum</h5>
            <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ImageCard;



