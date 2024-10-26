import React from 'react';
import useCarts from '../../../hooks/useCarts';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Helmet } from 'react-helmet-async';
const Cart = () => {

    const [cart, refetch] = useCarts();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    const [axiosSecure] = useAxiosSecure();

    const handleCartDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/cart?id=${id}`)
                .then(res=> {
                    if(res.data.deletedCount > 0){
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
            }
          });
    }

    return (
        <div>
            <Helmet>
            <title> All Cart | Bistro Boss</title>
        </Helmet>
            <div className='mt-4'>
                <SectionTitle subtitle={'My Cart'} Title={'WANNA ADD MORE?'} />
            </div>

            <div className="overflow-x-auto  p-4 bg-white drop-shadow-lg rounded-lg">
                <div className='flex justify-between items-center my-5 '>
                    <h2 className='md:text-4xl '>Total Order: {cart.length}</h2>
                    <h2 className='md:text-4xl '>Total Price: {totalPrice}</h2>
                    <button className='btn btn-secondary'>Pay</button>
                </div>
                <table className="table w-full table-zebra table-pin-rows table-pin-cols">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {cart.length > 0 ? cart.map((item, index) => <tr key={item?._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-16 w-16">
                                    <img
                                    src={item?.image}
                                    alt="Avatar Tailwind CSS Component" />
                                </div>
                                </div>
                            </div>
                            </td>
                            <td>
                                <h2>{item?.name}</h2>
                            </td>
                            <td><h2>{item?.price}</h2></td>
                            <th>
                                <button onClick={()=>handleCartDelete(item?._id)} className='px-2 py-2 rounded-lg bg-red-600 '><MdDeleteForever className='text-2xl text-white' /></button>
                            </th>
                        </tr>) : <h2 className='text-2xl'>Item Not Available!</h2>}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;