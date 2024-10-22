import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const Testimonials = () => {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/review')
        .then((res)=> res.json())
        .then((data)=> setReview(data))

    },[])
    console.log(review)

    return (
        <div className='my-8'>
            <SectionTitle subtitle={'What Our Clients Say'} Title={'TESTIMONIALS'}/>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            review.map((item, index) => (
                <SwiperSlide key={index} className='min-h-[200px] py-16'>
                  
                    <div className='flex flex-col items-center justify-center px-16 '>
                    <Rating value={item.rating} readOnly style={{ maxWidth: 180 }} className='pb-8' />
                        <FaQuoteLeft className='text-6xl text-black mb-4'/>
                        <p className='text-lg text-center'>{item.details}</p>
                        <p className='text-yellow-700 text-center uppercase text-3xl'>{item.name}</p>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
        </div>
    );
};

export default Testimonials;