

const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-[#Fff] justify-between place-item-center w-full  mt-80 px-2 md:px-0 xl:mt-9 ">
        <div className="md:w-1/2  p-4 bg-[#FED29C] h-[613px] place-content-center text-left">
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mx-auto font-bold text-[#383838] md:max-w-lg mb-4">
        Experience clear vision <br /> with OptiChroma Vision <br /> Frames
        </h2>
        <p className="text-lg text-[#383838] mx-auto max-w-lg mb-4">
        At OptiChroma, we believe that everyone deserves clear vision and stylish eyewear. That's why we've designed a collection of frames that prioritize both form and function.
        </p>
        <p className="text-lg text-[#383838] mx-auto max-w-lg mb-8">
          Our team of experts is dedicated to helping you find the perfect pair of glasses.
        </p>
        <button className="bg-[#383838] xl:ml-[5.5rem] 2xl:ml-[12.7rem] text-white font-bold py-2 px-6 rounded">
          About Us
        </button>
      </div>
      <div className="md:w-1/2 h-[613px]">
        <img src="https://i.ibb.co/rGxVsWc/reflectr-Image.png" alt="OptiChroma Vision Frames" className="w-full md:h-[38.3rem] 2xl:h-[38.3rem] " />
      </div>
    </div>
    );
};

export default AboutUs;