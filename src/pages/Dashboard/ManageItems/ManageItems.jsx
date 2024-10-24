import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';

const ManageItems = () => {


    const [menu]= useMenu();
    
    return (
        <div>
            {/* <h2 className="text-4xl text-center my-6">Manage All Items</h2> */}
            <SectionTitle Title={'Manage All Items'} subtitle={'here more..'}/>
            <div className="overflow-x-auto">
            <div className='my-4'>
                        <h2 className='text-3xl font-medium '>Total Items: {menu?.length} </h2>
                    </div>
  <table className="table overflow-hidden rounded-xl">
    {/* head */}
    <thead className='bg-orange-500 text-white'>
      <tr >
        <th>
          #
        </th>
        <th>Photo</th>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th className='text-center'>Action</th>
        <th className='text-center'>Action</th>
      </tr>
    </thead>
    <tbody>
      {menu?.length && menu.slice(0,10).map((item, index)=> <tr>
        <td>
          {index + 1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item?.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
          {item.name}
        </td>
        <td className='capitalize'>{item?.category}</td>
        <td>
          <h2>{item?.price}</h2>
        </td>
        <td className='text-center '>
        <button className="btn md:btn-sm btn-xs btn-primary mr-1">Edit</button>
        </td>
        <td className='text-center space-y-1'>
            <button className="btn md:btn-sm btn-xs bg-red-700 text-white">Delete</button>
        </td>
      </tr>)}
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageItems;