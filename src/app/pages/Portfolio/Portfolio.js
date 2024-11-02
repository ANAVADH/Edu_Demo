import React from 'react'

function Portfolio() {
    return (
        <div className="bg-portfolioBg p-5 flex justify-start">
            <div className="ml-8 md:ml-32">
                <div className="mt-10">
                    <h4 className="text-3xl md:text-5xl text-black">Lorem ipsum dolor sit amet,</h4>
                    <h4 className="text-3xl md:text-5xl text-black">consectetur</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-10 md:mt-20">
                    {[
                        {
                            src: "https://s3-alpha-sig.figma.com/img/7b32/6abd/03a6ef310f2be36cb5c872cadef987fb?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X5VV8lYNzpkOCezLlT5X5BFCBtGO2teJdMPk~9q8cBRney8fjqAKphTbU87i2qthcPq2rmETEZrTvT2mmJG3sKOT6T6whOutePZzZqFYLkSk60Ejc9DG8h6SiYJ-AiLFH9yIbPrbO7-5Mf6zlJ97t9CwbpEyBq1wbHWYYyayF~lFxAsXQxpI~xj9HDtvZb7rOnZ8Lwr1pNoRUgyDj5YmRwFTqwBfhgCB9zxQ2t22sOTi3ybHfz8iqwfksz-XEd-NTIi03rZuvt7vwcQXxXVI4~CMtwMrsqvpAKL3zB3xNe5lIQXM-QITYwnNL2ghQd3uvsBPARXgYuVnE0APqM0d2g__",
                            heading: "Consectetur adipiscing elit",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. "
                        },
                        {
                            src: "https://s3-alpha-sig.figma.com/img/676c/f1f6/20a34a9b8d994fadb9aa4893051a17e8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YVAKLLMDRCX6V~YqJMykjqjHJi6bLvUpX798JejlcXgssT5EAy4CDcENDVKOkD5yoCIUx~2lpB4MwQm4AYIHnDDsxfcF9wc2VLnq3r1tgAezvqJtbr9Ft1d~YVcX5-gMvdYQRZHWPRdNb~xa2o7-8Hv02fyTeItXFtZOu3JVa1eOK7nL0uSlfeevWy7beN2lHRGRJYizBhu8RXLwAjiagsqqN-TVyLGX7OATG80YnQ573is9JnfcwFKjjlLF2YQe~nB-6sJxkKq-p8Ut8NHtW8aPJidztqdf~HnJImbhzE83Sf27mtrR6qtwor1Uq87qB21Py7iJTW5DEVhab~GI1Q__",
                            heading: "Consectetur adipiscing elit",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. "
                        },
                        {
                            src: "https://s3-alpha-sig.figma.com/img/afb8/eb74/9e48899c94bd8fb546138ceb35b73004?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UYsj-dUVOSMC0cEHf3R1frvtSxZfaPeQHEGkWaBLt9-5xrguVy8O8dA0I-17a3zKU2Gp9It63TpM2VSQ06lAiWgoXqhlfowkBfVUTPGmttgftOZ5i~n6aLL5QClbkO7RdCZht5XGXXAVGWhG~eTKnk9pQ-pU6sDr64zT7-9On31vRU4CiFfTEX3EeOYlHRaVQ1ig-elUODxD6IsjMEkGVXVI3kPrHklplN8AVUKdXp4Y7zPazurThXTuBFUnD97elKlYRzxIex0-1fTIiENJiwYb7wI4nOt5cNQ-iUgtqvHm~Ms3PyG838d44R82xkTze8EnaT7~R8knz2eTEF9BTg__",
                            heading: "Consectetur adipiscing elit",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. "
                        },
                        {
                            src: "https://s3-alpha-sig.figma.com/img/17bb/cd15/6b3965637eff929d06c286edd6cd0cd8?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lctIFGfVqGPWUfSWOVk8pfx9SQlLSyUZPyl5DfcM6Isk1S3l4jLMPLwuw-8VviMHue4k7wFtwFcJJ85QUOs7WYREBQN2aCShfrPLl7NlhTF9kdwnM4qXHly02mWbr~crvzQcTRw9gAvE0~VV6Y85UUwceS4Zy0JRwXkfvfcBTubu0S5p2M6bVNtR95b9ML4NbM~J6zHoxjpxqGOO3djMflgiraysXbr1dY03eFFF2h1~gdnifRYSYqY8YRzSwfMBpu0eNS3Kl7O0KDwL8fxNJ~eJeMpRWmNaFpyqNA9e59r1ppzpqC15wAWkgVaRLZ0iGFrSG1culxLqgjS5OSIM~w__",
                            heading: "Consectetur adipiscing elit",
                            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. "
                        },
                    ].map((image, index) => (
                        <div key={index} className="relative w-full h-auto">
                            <img
                                className="w-full h-72 object-cover rounded-lg"
                                src={image.src}
                                alt=""
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent opacity-70"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white">
                                <h5 className="text-lg font-bold">{image.heading}</h5>
                                <p className="text-sm opacity-80">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Portfolio