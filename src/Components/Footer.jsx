import React from 'react';
import {  FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
           
           <footer className="bg-gray-50 py-10 mt-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <img src="https://i.ibb.co/c1bgpy9/EyeGlass.png" alt="" className='w-36' />
            <p className="text-gray-600 mt-2 w-[350px]">
              Latin literature from 45 BC, making it over 2000 years old. Richard  McClintock, a Latin professor at <br /> Hampden.
            </p>
            <div className="flex mt-4">
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800 mr-4">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="flex justify-between">
              <div>
                <h5 className="text-gray-500 text-sm font-semibold mb-2">Support</h5>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Terms & Conditions</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Product FAQs</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Company Support</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Manage Account</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm font-semibold mb-2">Quick Links</h5>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">About Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Blog Post</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Product Features</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Company Info</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Company Info</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm font-semibold mb-2">Community</h5>
                <ul>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Become an Affiliate</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Help Center</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Product FAQs</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Our Forums</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Product API</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-[#FED29C] mt-8 pt-6 flex justify-between text-sm text-gray-500">
          <div>
            &copy; 2023 All rights reserved by EyeGlass.
          </div>
          <div>
            <a href="#" className="hover:text-gray-800">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
        </div>
    );
};

export default Footer;