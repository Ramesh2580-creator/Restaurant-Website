import React from 'react';

const Header = () => {
  return (
    <div className='relative'>
      <div
        className="bg-cover bg-center h-[34vw] m-[30px] rounded-md"
        style={{ backgroundImage: "url('header_img.png')" }}
      ></div>
      <div className='absolute flex flex-col items-start gap-4 max-w-[50%] bottom-[10%] left-[6vw] md:left-[10%] md:max-w-[60%]'>
        <h2 className="text-4xl md:text-5xl lg:text-7xl text-gray-100">Order your favourite food here</h2>
        <p className="mb-8 text-base md:text-lg lg:text-gray-100">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise, one delicious meal at a time.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
