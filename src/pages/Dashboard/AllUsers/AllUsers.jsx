import React from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { AiFillDelete } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import useUser from '../../../hooks/useUser';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const AllUsers = () => {

    const [userData, refetch] = useUser();
    const axiosSecure = useAxiosSecure();
    const {deleteUserProfile} = useAuth();
    

    const handleRoleAdmin = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You can change user permissions!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/api/users/admin?id=${id}`)
                .then(res => {  
                    refetch(); 
                    if (res.data.modifiedCount > 0) { 
                        Swal.fire({
                            title: "Updated!",
                            text: "User role updated successfully.",
                            icon: "success"
                        });
                    }
                })
            }
          });
        
    }

    const handleUserDelete = (id) => {

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
                deleteUserProfile()
                axiosSecure.delete(`/api/users?id=${id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deletedCount > 0) {
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
            <div className='mx-auto'>
                <SectionTitle subtitle={'How many??'} Title={'MANAGE ALL USERS'} />
            </div>
            <div>
                <div className="overflow-x-auto">
                    <div className='my-4'>
                        <h2 className='text-3xl font-medium '>Total Users: {userData?.length}</h2>
                    </div>
                    <table className="table overflow-hidden rounded-xl">
                        {/* head */}
                        <thead className='bg-orange-400 text-white uppercase  '>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {userData?.length > 0 ? userData.map((user, index) =>
                                <tr key={user?._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={user?.photo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h2 className='text-base'>{user?.name}</h2>
                                    </td>
                                    <td>
                                        <h2 className='text-base'>{user?.email}</h2>
                                    </td>
                                    <td>
                                        {user?.role === 'admin' ? "Admin" : <button onClick={() => handleRoleAdmin(user?._id)} className=' border p-2 rounded-md bg-orange-400'><FaUsers className='text-xl text-white ' /></button>}
                                        </td>
                                    <th>
                                        <button onClick={() => handleUserDelete(user?._id)} className="py-2 border px-2 bg-red-600 rounded-md"><MdDeleteForever className=' text-white text-xl' /></button>
                                    </th>
                                </tr>
                            ) : <></>}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;