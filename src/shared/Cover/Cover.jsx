import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({title, img, description}) => {
    return (
        <div className='my-8'>
           <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
      <div className="hero h-[200px] md:h-[500px]">
        <div className="hero-overlay bg-opacity-0 "></div>
        <div className="hero-content bg-black flex items-center w-8/12 h-2/4 bg-opacity-30 rounded-lg text-center text-neutral-content">
          <div className="max-w-md mt-7">
            <h1 className="mb-5 text-5xl font-bold opacity-100 text-white">{title}</h1>
            <p className="mb-5 text-white">{description}</p>
            </div>
            </div>
            </div>
            </Parallax> 
            </div>
            );
          };

export default Cover;