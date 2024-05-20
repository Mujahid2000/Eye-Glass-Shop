// Correct imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import './Style.css';
import { useEffect, useState } from 'react';

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth > 768); // Set the width threshold for mobile view
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize); // Update value on resize

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    
    return (
        <div className="bg-[#EAEAEA]  h-[60rem] flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center justify-center gap-2">
            
            <div className='ml-3 md:ml-32 lg:ml-48 xl:ml-64 2xl:ml-36'>
                <h1 className="text-5xl absolute mb-28 font-bold text-[#383838]">Personalized Eyeglass <br /> Shopping</h1>
                <button className="bg-[#383838] mt-36 w-[15rem]  h-[3rem] text-white font-bold text-lg rounded-md active:bg-[#121111]">Buy Now</button>
            </div>
            
            <div className={`${isMobile ? 'bg-[#FED29C] absolute mt-20 ml-96 md:block lg:block w-[750px] h-[750px] rounded-full flex items-center ' : 'hidden'}`}>
                    {/* This div will be hidden on mobile */}
                </div>
            
            {
                isMobile ? 

              (  <Swiper
                    direction={'vertical'}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className=" z-10"
                   
                >
                    <SwiperSlide><img src="https://i.ibb.co/02sq8MP/Image-12.png" alt="" className=' max-w-full'  /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/xhyzzQJ/Image-12-copy.png" alt="" className=' max-w-full' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/sqRGDK5/Image-12-copy.png" alt="" className=' max-w-full ' /></SwiperSlide>
                </Swiper>
               ) :(

                   <img src="https://i.ibb.co/02sq8MP/Image-12.png" alt=""  />
               )
            }
           
        </div>
    );
};

export default Banner;
