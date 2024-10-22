import React from 'react';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 my-7'>
            {items.map(item => (
                <div key={item._id} className="card bg-base-100 shadow-xl">
                <figure>
                  <img
                  className='w-full max-h-[424px]'
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
            ))}
        </div>
    );
};

export default OrderTab;