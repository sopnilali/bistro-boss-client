import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ManageItems = () => {

  const [menu, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();



  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");



  const handleDeleteItem = (id) => {
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
        axiosSecure.delete(`/api/menu?id=${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
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

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Filtered menu items based on search term
  const filteredMenu = menu.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // Pagination calculations for filtered items
  const totalPages = Math.ceil(menu.length / itemsPerPage);
  const paginatedMenu = filteredMenu.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
       <Helmet>
            <title> Manage All Menu | Bistro Boss</title>
        </Helmet>
      <SectionTitle Title={'Manage All Items'} subtitle={'here more..'} />
      <div className="">
        <div className='flex justify-between mb-2'>
          <h2 className='text-3xl font-medium'>Total Items: {menu?.length} </h2>
          <div className=" flex  items-center gap-2 " >
            <h2 className=' block'>Search by</h2>
        <input 
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => { 
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
          className=" input input-bordered input-sm border outline-none rounded-md max-w-full"
        />
      </div>
        </div>
        <table className="table overflow-hidden rounded-xl ">
          <thead className='bg-orange-500 text-white'>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th className='text-center'>Edit</th>
              <th className='text-center'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {paginatedMenu.map((item, index) => (
              <tr key={item._id}>
                <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt="Avatar" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className='capitalize'>{item.category}</td>
                <td>{item.price}</td>
                <td className='text-center'>
                  <Link to={`/admin/updateItem/${item._id}`}>
                  <button className="rounded-md md:btn-sm btn-xs bg-green-700 text-white">Edit</button>
                  </Link>
                </td>
                <td className='text-center'>
                  <button onClick={() => handleDeleteItem(item._id)} className="rounded-md md:btn-sm btn-xs bg-red-700 text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 mx-1 rounded ${currentPage === 1 ? 'bg-gray-300 btn btn-sm' : 'bg-blue-500 btn-sm text-white'}`}
          >
            First
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 mx-1 rounded ${currentPage === i + 1 ? 'bg-gray-300 btn btn-sm' : 'bg-blue-500 btn-sm text-white'}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 mx-1 rounded ${currentPage === totalPages ? 'bg-gray-300 btn btn-sm' : 'bg-blue-500 btn-sm text-white'}`}
          >
            Last
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;