

const ModelCard = () => {
    return (
        <div className="max-w-[113rem] bg-white px-5 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-16 mt-16 mx-auto place-content-center">
           <div>
             {/* card 1 */}
             <div className="relative max-w-[643px] max-h-[633px] my-9">
                <img src="https://i.ibb.co/MRsWbjY/Image-2.png" alt="" className="relative"/>
                <div className="absolute inset-0 flex  justify-center">
                    <div className="w-[30rem] h-[14rem] mt-[22rem] md:mt-[22rem] lg:mt-[29rem] xl:mt-[23rem] 2xl:mt-[23rem] bg-white shadow-lg rounded-lg overflow-hidden z-30">
                        <div className="text-center px-6 py-4">
                            <div className="py-4">
                                <h3 className="text-[#383838] text-[25px] font-bold leading-[35px] tracking-normal text-center">Bravo Sunglasses</h3>
                                <p id="description" className="text-sm mt-3 font-medium text-gray-600">Up to 80% off on selected item</p>
                            </div>
                            <button className="bg-[#383838] px-10 mt-6 py-3 text-white font-bold text-lg rounded-md active:bg-[#121111]">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* card3 */}
            <div>
                <div className="relative max-w-[643px] max-h-[509px] mt-[16rem] md:mt-[17rem] lg:mt-[18rem] xl:mt-0 2xl:mt-0">
                <img src="https://i.ibb.co/w0T1F5y/Image-3.png" alt="" className="relative"/>
                <div className="absolute inset-0 flex  justify-center">
                    <div className="w-[30rem] h-[14rem] mt-[18rem] md:mt-[17rem] lg:mt-[24rem] xl:mt-[16rem] 2xl:mt-[15.5rem] bg-white shadow-lg rounded-lg overflow-hidden z-30">
                        <div className="text-center px-6 py-4">
                            <div className="py-4">
                                <h3 className="text-[#383838] text-[25px] font-bold leading-[35px] tracking-normal text-center">John Jacobs</h3>
                                <p id="description" className="text-sm mt-3 font-medium text-gray-600">Up to 40% off on selected item</p>
                            </div>
                            <button className="bg-[#383838] px-10 mt-6 py-3 text-white font-bold text-lg rounded-md active:bg-[#121111]">Buy Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
           </div>
            
            {/* card 4 */}
            <div className="lg:mt-[2.2rem]">
                {/* card 2 */}
            <div >
                <div className="relative max-w-[643px] max-h-[509px] my-9 mt-[13rem] md:mt-[2.3rem] lg:mt-0 xl:mt-0 2xl:mt-0">
                <img src="https://i.ibb.co/1vLgBRN/Image-9.png" alt="" className="relative"/>
                <div className="absolute inset-0 flex  justify-center">
                    <div className="w-[30rem] h-[14rem] mt-[17rem] md:mt-[18rem] lg:mt-[24rem] xl:mt-[15rem] 2xl:mt-[15.5rem] bg-white shadow-lg rounded-lg overflow-hidden z-30">
                        <div className="text-center px-6 py-4">
                            <div className="py-4">
                                <h3 className="text-[#383838] text-[25px] font-bold leading-[35px] tracking-normal text-center">Tommy Hilfiger</h3>
                                <p id="description" className="text-sm mt-3 font-medium text-gray-600">Up to 30% off on selected item</p>
                            </div>
                            <button className="bg-[#383838] px-10 mt-6 py-3 text-white font-bold text-lg rounded-md active:bg-[#121111]">Buy Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>

                <div className="relative max-w-[643px] max-h-[633px] mt-[16rem] md:mt-[16.8rem] lg:mt-[17.5rem] xl:mt-0 2xl:mt-0">
                <img src="https://i.ibb.co/WvqwMLf/Image-4.png" alt="" className="relative"/>
                <div className="absolute inset-0 flex  justify-center">
                    <div className="w-[30rem] h-[14rem] mt-[22rem] md:mt-[21rem] lg:mt-[30rem] xl:mt-[23rem] 2xl:mt-[23rem] bg-white shadow-lg rounded-lg overflow-hidden z-30">
                        <div className="text-center px-6 py-4">
                            <div className="py-4">
                                <h3 className="text-[#383838] text-[25px] font-bold leading-[35px] tracking-normal text-center">Bravo Sunglasses</h3>
                                <p id="description" className="text-sm mt-3 font-medium text-gray-600">Up to 10% off on selected item</p>
                            </div>
                            <button className="bg-[#383838] px-10 mt-6 py-3 text-white font-bold text-lg rounded-md active:bg-[#121111]">Buy Now</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ModelCard;