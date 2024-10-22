import React from 'react';

const NumberTitle = ({heading}) => {
    return (
        <div className='bg-black min-h-72 my-9 max-w-full flex items-center justify-center'>
            <h2 className='text-[50px] text-white '>{heading}</h2>
        </div>
    );
};

export default NumberTitle;