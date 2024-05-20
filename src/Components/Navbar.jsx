import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMdCart, IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    let Links = [
        {name: 'Home', link: '/', id: 1},
        {name: 'About Us', link: '/shop', id: 2},
        {name: 'Products', link: '/products', id:3},
        {name: 'Features', link: '/features', id:4},
        {name: 'Reviews', link: '/reviews', id:5},
        {name: 'Contact Us', link: '/contactUs', id:6},
        
    ]
    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-50">
            <div className="flex  md:flex justify-between items-center bg-white py-4 md:px-5 px-7">
                <div className="font-bold text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                <Link to="/" className="text-gray-800">
                        <img src="https://i.ibb.co/c1bgpy9/EyeGlass.png" alt="" className='w-24 md:w-36 lg:w-44 xl:w-48 2xl:w-48'  />
                    </Link>
                </div>
                
                <div onClick={() => setOpen(!open)} className="text-3xl text-center absolute right-8 top-3 cursor-pointer md:hidden">
                {open ? < IoMdClose/> : <IoMdMenu />}
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 text-center  absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16' : 'top-[-490px]'} `}>
                {
                    Links.map((nav) =>(
                        <li className="md:ml-8 cursor-pointer text-sm md:text-sm xl:text-base 2xl:text-xl md:my-0 my-7" key={nav.id}>
                        {nav.name}
                        </li>
                    ))
                }

                </ul>

                <div className='flex mr-16 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 gap-3'>
                <IoMdCart className='w-6  h-6 cursor-pointer'/>
                <FaUser className='w-5 h-5 cursor-pointer'/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;