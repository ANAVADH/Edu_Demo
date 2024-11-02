import React from 'react'
import TopFooter from './TopFooter'

function Footer() {
    return (
        <div className=''>
            <TopFooter />
            <footer className="bg-[#0a1c23] text-white py-12">
                <div className="container mx-auto px-6">

                    {/* Quick Links */}
                    <div className="flex flex-col gap-8 items-center md:flex-row ">
                        <h2 className="text-lg font-semibold">Quick Links</h2>
                        <div className="mt-1 flex gap-6 text-sm font-medium">
                            <a href="#" className="hover:text-gray-300">Home</a>
                            <a href="#" className="hover:text-gray-300">About Us</a>
                            <a href="#" className="hover:text-gray-300">Pricing</a>
                            <a href="#" className="hover:text-gray-300">Portfolios</a>
                            <a href="#" className="hover:text-gray-300">Insights</a>
                        </div>
                    </div>

                    <hr className="border-gray-700 my-6" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

                        <div className="absolute top-[-24px] left-1/3 w-px h-[calc(100%+72px)] bg-gray-700 hidden md:block"></div>
                        <div className="absolute top-[-24px] left-2/3 w-px h-[calc(100%+72px)] bg-gray-700 hidden md:block"></div>

                        <div className="flex flex-col items-center space-y-8">
                            <a href="#" className="w-72 block p-4 bg-[#12313d] rounded-md hover:bg-[#1a4250] transition text-center text-sm">
                                Lorem ipsum dolor sit amet
                            </a>
                            <a href="#" className="w-72 block p-4 bg-[#12313d] rounded-md hover:bg-[#1a4250] transition text-center text-sm">
                                Lorem ipsum dolor sit amet
                            </a>
                            <a href="#" className="w-72 block p-4 bg-[#12313d] rounded-md hover:bg-[#1a4250] transition text-center text-sm">
                                Lorem ipsum dolor sit amet
                            </a>
                        </div>

                        <div className="flex flex-col items-center space-y-4">
                            <a href="#" className="w-72 block p-4 bg-[#12313d] rounded-md hover:bg-[#1a4250] transition text-center text-sm">
                                Lorem
                            </a>
                            <a href="#" className="w-72 block p-4 bg-[#12313d] rounded-md hover:bg-[#1a4250] transition text-center text-sm">
                                Ipsum
                            </a>
                            <a href="#" className="w-72 block p-4 bg-[#12313d] rounded-md hover:bg-[#1a4250] transition text-center text-sm">
                                Consectetur
                            </a>
                            <a href="#" className="w-72 block p-4 bg-[#12313d] rounded-md hover:bg-[#1a4250] transition text-center text-sm">
                                Effictur
                            </a>
                        </div>

                        <div className="flex flex-col items-center space-y-4">
                            <h2 className="text-lg font-semibold">Contact Us</h2>
                            <p className="text-gray-400 text-sm text-center">
                                Lorem Ipsum, Iso lorem, <br /> Iso Lorem Posum
                            </p>
                            <p className="text-sm">+91 00000 00000</p>
                            <p className="text-sm">info@demo.com</p>
                            <h3 className="text-sm font-semibold">Follow us on</h3>
                            <div className="flex space-x-3 mt-2">
                                <a href="#" className="text-gray-400 hover:text-gray-300 text-xl"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="text-gray-400 hover:text-gray-300 text-xl"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="text-gray-400 hover:text-gray-300 text-xl"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#" className="text-gray-400 hover:text-gray-300 text-xl"><i className="fab fa-youtube"></i></a>
                                <a href="#" className="text-gray-400 hover:text-gray-300 text-xl"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-300 mt-12 pt-4 text-start text-gray-300 text-sm">
                        ©2024 Demo. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer