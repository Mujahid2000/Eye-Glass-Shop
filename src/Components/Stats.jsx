import { GiSunglasses } from "react-icons/gi";

const Stats = () => {
    return (
        <div className="px-3 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 mx-auto max-w-[110rem] place-items-start 2xl:place-items-center -mt-20 gap-4">
            {/* 1 */}
            <div className="z-30">
            <div className="w-32 h-32 rounded-full bg-[#FED29C] z-30 flex  items-center justify-center">
                <img src="https://i.ibb.co/kg3KB2t/Icon.png" alt="" />
            </div>
            <div className="mt-10">
                    <h5 className="text-[#383838] text-sm 2xl:text-xl font-bold leading-7 tracking-normal text-center">Search you sunglass</h5>
                    <p className="text-[#545454] text-xs  2xl:text-base font-normal leading-[26px] tracking-normal text-center">Shop Stylish Eyewear Now</p>
            </div>
            </div>

            {/* 2 */}
            <div className="z-30">
            <div className="w-32 h-32 rounded-full bg-[#FED29C] z-30 flex  items-center justify-center">
            <GiSunglasses className="w-14 h-14"/>
            </div>
            <div className="mt-10">
                    <h5 className="text-[#383838] text-sm 2xl:text-xl font-bold leading-7 tracking-normal text-center">Select Sunglass </h5>
                    <p className="text-[#545454]  text-xs  2xl:text-base font-normal leading-[26px] tracking-normal text-center">Shade Your Style</p>
            </div>
            </div>

            {/* 3 */}
            <div className="z-30">
            <div className="w-32 h-32 rounded-full bg-[#FED29C]  flex  items-center justify-center">
            <img src="https://i.ibb.co/K7wQyt8/Vector.png" alt="" />
            </div>
            <div className="mt-10">
                    <h5 className="text-[#383838] text-sm 2xl:text-xl font-bold leading-7 tracking-normal text-center">Make Payment</h5>
                    <p className="text-[#545454]  text-xs  2xl:text-base font-normal leading-[26px] tracking-normal text-center">Securely Checkout Now</p>
            </div>
            </div>

            {/* 4 */}
            <div className="z-30 ">
            <div className="w-32 h-32 rounded-full bg-[#FED29C] z-50 flex  items-center justify-center">
            <img src="https://i.ibb.co/Q9PKkmJ/Icon-1.png" alt="" />
            </div>
            <div className="mt-10">
                    <h5 className="text-[#383838] text-sm 2xl:text-xl font-bold leading-7 tracking-normal text-center">Received Product</h5>
                    <p className="text-[#545454]  text-xs  2xl:text-base font-normal leading-[26px] tracking-normal text-center">See the World Clearly</p>
            </div>
            </div>
            
        </div>
    );
};

export default Stats;
