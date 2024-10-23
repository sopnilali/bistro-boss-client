import React from 'react';
import FoodCard from '../FoodCard/FoodCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

const OrderTab = ({ items }) => {



  return (
    <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-7 '>
      {
      items.map(item => 
        <FoodCard key={item._key} item={item} />)
      }

      {/* Open the modal using document.getElementById('ID').showModal() method */}

    </div>
  );
};

export default OrderTab;