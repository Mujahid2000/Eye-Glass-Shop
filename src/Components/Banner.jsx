// Correct imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';
import './Style.css';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Banner = () => {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth > 1025); // Set the width threshold for mobile view
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize); // Update value on resize

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    
    return (
        <div className="bg-[#EAEAEA] h-[36.5rem] md:h-[35rem] lg:h-[40rem] xl:h-[45rem] 2xl:h-[60rem] flex flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row place-items-center items-center justify-center gap-2 mt-0">
            
            <div className='ml-0 flex items-center md:ml-24 lg:ml-48 xl:ml-64 2xl:ml-36 '>
                <h1 className="text-xl mt-[23rem] md:mt-[23rem] lg:-mt-[15rem] xl:mt-[1rem] 2xl:mt-[5rem] -ml-9 md:ml-[3rem] lg:ml-[15rem] xl:ml-[15rem] 2xl:ml-[20rem]  md:text-2xl z-40 lg:text-2xl xl:text-3xl 2xl:text-5xl absolute mb-28 font-bold text-[#383838]">Personalized Eyeglass <br /> Shopping</h1>
                <button className="inline-flex active:bg-[#141414] items-center px-5 py-3 gap-3 -ml-[11rem] md:-ml-[25rem] lg:-ml-[10rem] xl:ml-[15rem] 2xl:ml-[20rem] mt-[16rem] md:mt-[16rem] lg:-mt-[22rem] xl:mt-[6rem] 2xl:mt-[10rem] absolute z-40 bg-[#383838]  text-white text-sm font-medium rounded-md"><FaShoppingCart/>Restore</button>
            </div>
            
            <div className={`${isMobile ? 'bg-[#FED29C] absolute xl:mt-15 2xl:mt-20 xl:ml-[27rem] 2xl:ml-72 md:block lg:block xl:w-[650px] 2xl:w-[750px] xl:h-[650px] 2xl:h-[750px] rounded-full flex items-center ' : 'hidden'}`}>
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
                    className=" z-10 "
                   
                >
                    <SwiperSlide><img src="https://i.ibb.co/02sq8MP/Image-12.png" alt="" className=' max-w-full '  /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/xhyzzQJ/Image-12-copy.png" alt="" className=' max-w-full' /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/sqRGDK5/Image-12-copy.png" alt="" className=' max-w-full ' /></SwiperSlide>
                </Swiper>
               ) :(

                   <img src="https://i.ibb.co/02sq8MP/Image-12.png" alt="" className='max-w-full h-96 mt-[12rem] md:mt-[10.5rem] lg:mt-[16rem]' />
               )
            }
           
        </div>
    );
};

export default Banner;
