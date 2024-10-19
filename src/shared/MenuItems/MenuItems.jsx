import React from 'react';

const MenuItems = ({item}) => {

    const {image, name, price, recipe } = item
    return (
        <div className='flex gap-6 my-6'>
            <img className='rounded-full rounded-tl-none w-[118px]' src={image} alt={name} />
            <div>
            <div className='flex items-center'>
            <h2 className='text-[20px]'>{name} </h2>
            <p className='ml-1'>----------</p>
            </div>
            <p>{recipe}</p>
            </div>
            <h4 className='text-[20px] text-yellow-600'>${price}</h4>
        </div>
    );
};

export default MenuItems;