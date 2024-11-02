import React from 'react'
import ImageCard from './ImageCard'

function AboutUs() {
  return (
<div
  className="h-[100%] bg-cover bg-center"
  style={{
    backgroundImage: `
     linear-gradient(90deg, #FFFFFF 40%, rgba(255, 255, 255, 0) 95%),
      url(https://s3-alpha-sig.figma.com/img/676c/f1f6/20a34a9b8d994fadb9aa4893051a17e8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVAKLLMDRCX6V~YqJMykjqjHJi6bLvUpX798JejlcXgssT5EAy4CDcENDVKOkD5yoCIUx~2lpB4MwQm4AYIHnDDsxfcF9wc2VLnq3r1tgAezvqJtbr9Ft1d~YVcX5-gMvdYQRZHWPRdNb~xa2o7-8Hv02fyTeItXFtZOu3JVa1eOK7nL0uSlfeevWy7beN2lHRGRJYizBhu8RXLwAjiagsqqN-TVyLGX7OATG80YnQ573is9JnfcwFKjjlLF2YQe~nB-6sJxkKq-p8Ut8NHtW8aPJidztqdf~HnJImbhzE83Sf27mtrR6qtwor1Uq87qB21Py7iJTW5DEVhab~GI1Q__)
    `,
  }}
>

<div className="grid grid-cols md:grid-cols-2 p-6 md:p-20 lg:p-40 mt-10 md:mt-36 gap-10 md:gap-20 items-center">

  {/* Text Section */}
  <div className="flex flex-col gap-4 md:gap-8 items-start mt-6 md:mt-14 ml-2 md:ml-8 ">
  <div>
    <h6 className="text-6xl text-black font-bold ">Lorem Ipsum</h6>
    <h6 className="text-5xl text-black ">dolor sit consectetur</h6>
    </div>
    <p className="text-sm md:text-base lg:text-lg leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum.
    </p>
  </div>

  {/* Image Card */}
  <div className="w-full flex justify-center md:justify-end">
    <ImageCard />
  </div>
  
</div>





    </div>
  )
}

export default AboutUs