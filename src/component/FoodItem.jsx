import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({ id,name,price,description,image }) => {
    const { cartItems,addToCart,removeFromCart } = useContext(StoreContext);
       return (
        <div className="w-full max-w-sm mx-auto border rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-white">
            <img src={image} className="w-full h-44 object-cover" />
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 truncate">{name}</h3>
                    <img src={assets.rating_starts} alt="Rating" className="w-24" />
                </div>
                <p className="text-gray-600 mb-2 line-clamp-2">{description}</p>
                <p className="text-lg font-bold text-gray-900 mb-4">${price}</p>
                
                <div className="flex items-center justify-between">
                    {!cartItems[id]
                        ?<button onClick={() => addToCart(id)} className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors" >
                            <img src={assets.add_icon_white} alt="Add Item" className="w-4 h-4 mr-1" /> Add to Cart </button>
                        :<div className="flex items-center space-x-2">
                            <button  onClick={() => removeFromCart(id)}  className="flex items-center bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"> 
                           <img src={assets.remove_icon_red} alt="Remove Item" className="w-4 h-4 mr-1"/> Remove </button>

                            <span className="text-lg font-semibold text-gray-800">{cartItems[id]}</span>

                            <button onClick={() => addToCart(id)} className="flex items-center bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors">
                            <img src={assets.add_icon_green} alt="Add Item" className="w-4 h-4 mr-1" /> Add More </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
