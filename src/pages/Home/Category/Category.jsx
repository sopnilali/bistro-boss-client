import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/img/home/slide1.jpg';
import slide2 from '../../../assets/img/home/slide2.jpg';
import slide3 from '../../../assets/img/home/slide3.jpg';
import slide4 from '../../../assets/img/home/slide4.jpg';
import slide5 from '../../../assets/img/home/slide5.jpg';

const Category = () => {
    
    return (
        <div className='my-4'>
            <Swiper
        slidesPerView="4"
       
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img className='w-full pr-2' src={slide1} alt="slide1" />
            <h3 className='text-4xl uppercase text-center -mt-20  text-white'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide >
            <img className='w-full pr-2' src={slide2} alt="slide2" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Soups</h3>

        </SwiperSlide>
        <SwiperSlide >
            <img className='w-full pr-2' src={slide3} alt="slide3" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Pizzas</h3>

        </SwiperSlide>
        <SwiperSlide >
            <img className='w-full pr-2' src={slide4} alt="slide4" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Desserts</h3>

        </SwiperSlide>
        <SwiperSlide >
            <img className='w-full' src={slide5} alt="slide5" />
            <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Salad</h3>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Category;