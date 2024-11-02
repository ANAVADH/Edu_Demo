import React from 'react'
import InsightsCard from './InsightsCard'

function Insights() {
  return (
    <div className='p-10'>
      <h6 className="mt-20 ml-36 text-5xl text-black ">Latest Insights</h6>
      <div className='mt-16 flex flex-wrap gap-6 justify-center sm:gap-8 lg:gap-12'>
        <InsightsCard imageSrc={'https://s3-alpha-sig.figma.com/img/b1d0/0f81/efb989628a731ebd8ce8a4a15080c86c?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iycVW0aJiUWcxn2IxDtesOJTtZXeTmvXU-rO7GyG-tHPJCSX-5YH2okcRydTZbk5xHIbk6kZxX88SCpyAP59-DdnLEtwwxRYNhFahmt-AApxwlqWYnJWavFiYU3UCagerqY51je-RCbX4lZnC~TFPBiumdonotbMDGN7j9mIfgP62AAcWhKgE7VpbK~6KMY3gJsFQXsAiN3VhyMWNFXANrns3cbXw0cOrFElRqVe~-MQWn98d-nYn7SfdgpC8C54in0~0Ku3hCu4TUdTNAN4UIB-mcxnIAnfukXPVVdYOB-u9dNZVzD~VReS7ne~avtJTdG9nCiTLMNMV4LwfWlhkQ__'} heading={'21 March 2023'} description={"dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"} />
        <InsightsCard imageSrc={'https://s3-alpha-sig.figma.com/img/c01f/553e/a6abf0fe0b591a4744ad61fde240173f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgNbjwsblpW3VvtAkAgl2qgKL6SNWmFsH5uFD6anraktrl9BCbQrsXkyT~kD7VsAUffOUSsjyXFZY-1d~yzGSG-qufG7~UYNbI2CyB~qmPTfuRJiq7fZDciemLt-nlfqlSa2kufiNpD0Vos16ndwcV-Gdp24NjsdhoiA9reaMdpmdLvmR-ClJvkzVkWm4vttlzVUzbp50fuH0JhIgn7msq-VCZyualNfF0iugKapfN~nTl21kZErbo6k5GZDF5FSzUsywvf241lffp0W6nEE1T3bXcFT0C~rhjeJJlDbUAYLk9VRKWB9oit-j5esVsuA4ha-~bE85EA2pxv-aVISIw__'} heading={'21 March 2023'} description={"dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"} />
        <InsightsCard imageSrc={'https://s3-alpha-sig.figma.com/img/c9c5/40f9/5619a0c6699746232cfa1254b83fc7b4?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bbp4ooaO0TYzHkOl1TnpLi0KZf96kcaprvJccVJNkS1SeQaZDnsiiod1hXPl431m7gU1PttIzuw6SDtGwKBzvY9S2gaI5aj7SDsna1ha1OgQO1jkKeTusqBwUJ8ftgdW8cJj9HrGpYmZfHXt9NerRvgiaQrBhEvC2OpEzM2CDGQmWcgpxEs6ODDnrAFBAmhUVyum4Od44eMHbAj8paNPVouTVgI5c9PzVh-TAHa1iA4IBMIYeCezrUrIp3X2z75VJdzrWXZSUChLPqLjSg31-1qyo3CFjfK~kQPe5BOeC1-~A6s7C0xGclIBJ0-8y8fjNzI2nzYpRWg0AfNnMkYV~g__'} heading={'21 March 2023'} description={"dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis"} />
      </div>
    </div>
  )
}

export default Insights