
import axios from 'axios';
import {  FaRegHeart } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { Toaster, toast } from 'sonner';

const ProductCard = () => {

    const products = [
        { id: 1, name: 'Bravo Sunglasses', price: '$100', originalPrice: '$150', image: 'https://i.ibb.co/cT9QCgy/Image-11.png', discount: '10%' },
        { id: 2, name: 'Vincent Chase', price: '$120', originalPrice: '$150', image: 'https://i.ibb.co/DYmkXnt/Image-7.png', discount: '10%' },
        { id: 3, name: 'John Jacobs', price: '$100', originalPrice: '$150', image: 'https://i.ibb.co/DYmkXnt/Image-7.png', discount: '10%' },
        { id: 4, name: 'Tommy Hilfiger', price: '$130', originalPrice: '$150', image: 'https://i.ibb.co/98Y0xVB/Image-9.png', discount: '10%' },
        { id: 5, name: 'Ray Ban', price: '$100', originalPrice: '$150', image: 'https://i.ibb.co/7CFkcYx/Image-10.png' ,discount: '10%'},
        { id: 6, name: 'Occhiali', price: '$110', originalPrice: '$150', image: 'https://i.ibb.co/L0S9YRz/Image-6.png', discount: '10%' },
      ];


      const handleCart = (cart) =>{
        axios.post('https://eye-server-my-sql.vercel.app/addCart', cart)
        .then((response) => console.log(response));
        toast.success("Item added to cart!")
      }
    

    return (
        <div className='max-w-[95rem] mx-auto -mt-[15rem] md:mt-[1.75rem] lg:mt-28 xl:mt-4 2xl:mt-9'>
            <div>
                <h2 className='text-[rgb(56,56,56)]  text-[38px] font-bold leading-[48px] pl-4 tracking-normal text-left'>Our Products</h2>
                <div className='flex  justify-between items-center flex-col pr-[5.5rem] md:flex-row md:pr-0 lg:pr-[2rem] xl:pr-[3rem] 2xl:pr-9 mt-2'>
                <p className='text-customGray  text-base font-normal leading-6 pl-5 tracking-normal text-left'>Experience crystal clear vision and brelevated style with our <br /> premium collection of eyeglasses.</p>
    <div className="flex items-center justify-center  mt-5 ">
      <button className="bg-transparent text-base text-gray-700 font-semibold py-2 hover:-mb-1 px-4 rounded hover:text-gray-500 hover:border-gray-500 hover:border">
        Latest
      </button>
      <button className="bg-transparent text-base text-gray-700 font-semibold py-2 hover:-mb-1 px-4 rounded hover:text-gray-500 hover:border-gray-500 hover:border">
        Special
      </button>
      <button className="bg-transparent  md:leading-4 text-base text-gray-700 font-semibold py-2 hover:-mb-1 px-3 rounded hover:text-gray-500 hover:border-gray-500 hover:border">
        Best Selling
      </button>
</div>
                </div>
            </div>

            <div className="container mx-auto mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className='px-3'>
            <div className='bg-[#F7F7F7] max-h-[27rem] p-8 rounded-md'>
                <div className='flex justify-between px-0'>
                <h5 className="flex items-center justify-center w-12 h-12 border-2  rounded-full bg-[#FED29C] "> {product.discount}</h5>
                <div>
                    <button className="flex items-center justify-center w-12 h-12 border-2 border-gray-400 rounded-full hover:border-gray-600 hover:text-gray-600 focus:outline-none"><FaRegHeart className="text-gray-400" size={24}/> </button>
                    </div>
                </div>
            <img src={product.image} alt="" className='max-h-[15rem]'/>
            <div className='flex justify-center pb-7 mt-20'>
            <GoDotFill className='w-6 h-6 text-[#ED770D]'/>
            <GoDotFill className='w-6 h-6 text-[#383838] '/>
            <GoDotFill className='w-6 h-6 text-[#FED29C]'/>
            </div>
            </div>
            <h2 className='mt-7 text-xl md:text-[30px] leading-[40px] text-[rgb(56,56,56)] font-jost font-normal tracking-normal text-left'>{product.name}</h2>
            <div className='flex justify-start items-center gap-6'>
                <p className='text-base md:text-[20px] leading-[30px] text-[rgb(56,56,56)] font-jost font-bold tracking-normal text-left'>{product.originalPrice}</p>
                <p className='text-base md:text-[20px] text-customGray font-jost text-custom font-normal tracking-normal text-left line-through'>{product.price}</p>
            </div>
            <button onClick={() =>handleCart(product)} className='text-customGray90 font-jost text-[20px] font-normal leading-[29px] mt-5 tracking-normal text-left underline'>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
    <Toaster
        position="bottom-right"
        toastOptions={{
          classNames: {
            success: "text-green-400",
          },
        }}
      />
        </div>
    );
};

export default ProductCard;