import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const FoodCard = ({item}) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    



    return (
        <>
              <Swiper
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide><div key={item._id} className=" rounded-xl bg-base-100 border hover:shadow-xl outline-none">
                <figure>
                  <img
                  className='w-full max-h-[424px] '
                    src={item.image}
                    alt="Shoes" />
                </figure>
                <div className="p-4 text-center">
                  <h2 className=" text-2xl font-semibold text-center">{item.name}</h2>
                  <p className='text-base'>{item.recipe}.</p>
                  <div className="card-actions justify-center my-6">
                    <button className="btn border-0 border-b-yellow-600 border-b-2 text-yellow-600 hover:bg-gray-900 hover:text-yellow-600">Add to Cart</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>
      </Swiper>

              </> 


    );
};

export default FoodCard;