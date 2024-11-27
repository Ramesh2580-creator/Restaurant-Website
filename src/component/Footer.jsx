import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div id='footer' className="bg-gray-900 flex flex-col items-center py-10 text-gray-50">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 justify-around">
                {/* Logo and Description */}
                <div className="flex flex-col items-start">
                    <logo className=" text-3xl text font-bold text-red-500">Restaurant Website</logo>
                    <p className="text-gray-300 mb-4 text-sm md:text-base">
                        Choose from a diverse menu featuring a delectable array of dishes crafted
                        with the finest ingredients and culinary expertise, one delicious meal at
                        a time.
                    </p>
                    <div className="flex space-x-4 mt-2">
                        <img src={assets.facebook_icon} alt="Facebook" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                        <img src={assets.twitter_icon} alt="Twitter" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6 h-6 hover:opacity-75 transition-opacity" />
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold mb-2 border-b-2 border-gray-500 pb-1">COMPANY</h2>
                    <ul className="space-y-1">
                        <li className="hover:text-gray-400 cursor-pointer transition-colors">Home</li>
                        <li className="hover:text-gray-400 cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-gray-400 cursor-pointer transition-colors">Delivery</li>
                        <li className="hover:text-gray-400 cursor-pointer transition-colors">Privacy Policy</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col">
                    <h2 className="text-lg font-semibold mb-2 border-b-2 border-gray-500 pb-1">Get in touch</h2>
                    <ul className="space-y-1">
                        <li className="hover:text-gray-400 cursor-pointer transition-colors">+977-1234567890</li>
                        <li className="hover:text-gray-400 cursor-pointer transition-colors">contact@example.com</li>
                    </ul>
                </div>
            </div>
            
            <hr className="w-full h-0.5 bg-gray-700 my-4" />

            <p className="text-center text-gray-400 text-sm">Copyright 2024 example.com - All Rights Reserved Ramesh Kumar Yadav.</p>
        </div>
    );
};

export default Footer;
