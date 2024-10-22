import React from 'react';
import featuredImg from '../../../assets/img/home/featured.jpg'


const Featured = () => {
    return (
        <div className=" Featuredbg bg-fixed ">
            <div className='bg-black bg-opacity-60 text-white min-h-[600px] py-10'>
                <div className='max-w-[400px] mx-auto text-center'>
                    <p className='italic text-yellow-700'>---Check it’out---</p>
                    <div className='divider divider-secondary'></div>
                    <h3 className='uppercase text-[30px]'>FROM OUR MENU</h3>
                    <div className='divider divider-secondary'></div>
                </div>
                <div className='flex justify-center flex-wrap items-center gap-5 '>
                    <img src={featuredImg} alt="featured" className="object-cover w-[400px] h-full rounded-md" />
                    <div className='max-w-[450px]'>
                        <h2 className="text-2xl  text-white">March 20, 2023</h2>
                        <h3 className="text-2xl  text-white">WHERE CAN I GET SOME?</h3>
                        <p className='text-base text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn border-0 mt-3 border-b-white bg-opacity-0 border-b-2 text-white hover:bg-white hover:text-black">ORDER NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;