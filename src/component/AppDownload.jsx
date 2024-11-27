import React from 'react';
import { assets } from '../assets/assets';

const AppDownload = () => {
  return (
    <div id='app-download' className="m-auto mt-20 text-center font-medium px-6 py-10 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        For a Better Experience, Download the <br/> Tomato App
      </h2>
      <p className="text-gray-600 mt-2">
        Get all the delicious meals at your fingertips!
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <img src={assets.play_store} alt="Download on Google Play" className="w-32 h-auto transition-transform transform hover:scale-105" />
        <img src={assets.app_store} alt="Download on the App Store" className="w-32 h-auto transition-transform transform hover:scale-105" />
      </div>
    </div>
  );
}

export default AppDownload;
