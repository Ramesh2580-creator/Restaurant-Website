import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import FoodItem from './FoodItem';

const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext)

    return (
        <div id='food-display' className='mt-8 px-4'>
            <h2 className='text-4xl font-bold text-gray-800 mb-6'>Top Dishes Near You</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {food_list.map((item, index) => {
                    if (category==="All" || category===item.category){
                        return <FoodItem key={index} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                    
                })}
            </div>
        </div>
    )
}

export default FoodDisplay;