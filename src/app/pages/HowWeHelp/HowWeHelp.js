import React from 'react'

function HowWeHelp() {
  return (
    <div>
      <div className="flex  justify-center  mt-16">
        <div className="w-full max-w-7xl h-96 bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(0, 42, 58, 0) 37.58%, rgba(30, 30, 30, 0.9) 100%), url(https://s3-alpha-sig.figma.com/img/2809/db0a/5e6a1ee682de5b3bcfc9e3fd2a7df873?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fb8vwVbJuXHN8yqp37Nvohu39b1zwz6n9mNAaJ5tWdFahA11ldXG7C9S261KM9~5YeomaXgVO3UqptzKvcva15qePUZjwnJbitSZPA0lDgaWI7Hg4T2YpH5QnC7wgT976R4M8Wei57~Mos6ZjajHkXT-nBC88sAn0sBagR31aiegNo0wVFatqgUU7yOECGqV6t1UGLRo5p9C1vgVaNZ4n7FbtjVri9LTGUOsKtiXKxqqWQ3QRX6YQTcYoUedLpMF3WItksS5E0vyGnQlTw~LsYNNCWti-Pn1OYg9~hPo6FLVjwb7pp0~2oGZYF7PZNdgfdYumUj7cUE0bn~Dnrk7IQ__)"
          }}>
          <div className="flex flex-col gap-5 items-start justify-start mt-56 ml-16">
            <h6 className="text-2xl text-white font-bold">Lorem ipsum dolor sit amet</h6>

            <div className='flex flex-col gap-2 '>
              <p className=" text-gray-200 ">Sanchez Alexis</p>
              <p className=" text-gray-300 ">CEO & Founder of Demo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="flex-1 p-4 rounded-lg">
          <div className="flex flex-col gap-5 items-start justify-start mt-7 ml-4 md:ml-28">
            <div>
              <h6 className="text-3xl text-black font-bold">Lorem ipsum dolor sit amet,</h6>
              <h6 className="text-3xl text-black font-bold">consectetur</h6>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non convallis accumsan, nibh odio gravida felis, vitae mollis massa lectus a neque. Mauris mollis elit quis iaculis iaculis. Vestibulum molestie nisl eget aliquet scelerisque. Vivamus efficitur dui eget velit interdum, non dapibus nisi fringilla. Mauris fermentum venenatis volutpat. Quisque efficitur ultricies erat eget rutrum. Phasellus feugiat quam eget est dapibus, non eleifend justo fermentum. Sed et commodo arcu, id euismod dui.</p>
          </div>
        </div>

        <div className="flex-1 p-4 mt-5 md:ml-10">
  <div className="flex flex-col">

    <div className="flex items-start">
      <hr className="w-0.5 h-32 md:h-40 mx-2 my-2 bg-gray-700 border-0 rounded dark:bg-gray-700" />
      <div className="flex flex-col gap-3 mt-3 md:mt-5 ml-2 md:ml-5">
        <h6 className="font-bold text-base md:text-lg">Lorem ipsum</h6>
        <p className="text-sm md:text-base leading-snug md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Donec mattis velit nulla. In hac habitasse platea dictumst.<br />
          Fusce non venenatis velit. Proin luctus malesuada mauris<br />
          vitae mattis. Pellentesque iaculis elit lorem.
        </p>
      </div>
    </div>

    <hr className="w-full md:w-96 h-0.5 my-3 md:my-6 bg-gray-200 rounded dark:bg-gray-700" />

    <div className="flex items-start">
      <hr className="w-0.5 h-32 md:h-40 mx-2 my-2 bg-gray-700 border-0 rounded dark:bg-gray-700" />
      <div className="flex flex-col gap-3 mt-3 md:mt-5 ml-2 md:ml-5">
        <h6 className="font-bold text-base md:text-lg">Lorem ipsum</h6>
        <p className="text-sm md:text-base leading-snug md:leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Donec mattis velit nulla. In hac habitasse platea dictumst.<br />
          Fusce non venenatis velit. Proin luctus malesuada mauris<br />
          vitae mattis. Pellentesque iaculis elit lorem.
        </p>
      </div>
    </div>

  </div>
</div>
      </div>
    </div>
  )
}

export default HowWeHelp