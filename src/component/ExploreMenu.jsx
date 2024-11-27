import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div id='explore-menu' className='flex flex-col gap-5'>
            <h2 className='text-gray-900 ml-4 md:ml-9 text-2xl md:text-2xl font-bold'>Explore our menu</h2>
            <p className='max-w-[90%] ml-4 md:ml-9 text-sm md:text-base'>
                Choose from a diverse menu featuring a delectable array of dishes crafted
                with the finest ingredients and culinary expertise, one delicious meal at
                a time.
            </p>
            <div className='flex overflow-x-auto scrollbar-hide m-5 overflow-hidden'>
                {menu_list.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                            className='flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer mx-2' // Added horizontal margin for spacing
                        >
                            <img
                                src={item.menu_image}
                                alt={item.menu_name}
                                className='w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg shadow-none transition-transform duration-300 hover:shadow-xl'
                            />
                            <p className='mt-2 text-center text-sm md:text-base'>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr className="m-[10px] h-[2px] bg-slate-300 border-none" />
        </div>
    );
};

export default ExploreMenu;
