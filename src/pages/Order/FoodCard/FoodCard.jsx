import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCarts from '../../../hooks/useCarts';

const FoodCard = ({item}) => {

  const {user} = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const [,refetch] = useCarts();


  const [axiosSecure] = useAxiosSecure();

  const [showModal, setShowModal] = useState(false);

      const handleShowModal = () => {
        setShowModal(!showModal);
      };

      const handleAddtoCart = (food) =>{

        const { name, image, price, recipe, _id } = food

        if(user && user.email){
          const cartItems = {
            menuId : _id,
            email : user.email,
            name,
            price,
            image
          }
          axiosSecure.post('/api/cart', cartItems)
          .then(res => {
            console.log(res)
            if(res.data.insertedId === null){
              Swal.fire({
                title: 'Item already in cart',
                text: `${name} is already in your cart`,
                icon:'info',
                confirmButtonColor: '#3085d6'
              })
            }
            else{
              refetch();
              Swal.fire({
                title: 'Item add to cart',
                text: `${name} has been added to cart`,
                icon:'success',
                confirmButtonColor: '#3085d6'
              })
            }
            
          })

        }
        else{
          Swal.fire({
            title: 'You are not logged in',
            text: `Please login to add to cart`,
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: 'Login'
          }).then(result => {
            if (result.isConfirmed) {
              navigate('/login', {state: {from:location}})
            }
          })
        }
      }

    return (
        <>
        <div key={item._id} className=" rounded-xl bg-base-100 border hover:shadow-xl duration-300 outline-none relative">
                <figure >
                  <img
                  className='w-full max-h-[424px] '
                    src={item.image}
                    alt="Shoes" />
                </figure>
                <div className="p-4 text-center ">

                  <button onClick={()=>handleShowModal(item)} className=" text-2xl font-semibold text-center">{item.name}</button>
                  <p className='text-base'>{item.recipe}.</p>
                  <p className='absolute top-2 right-5 bg-slate-950 text-white px-4 rounded-lg'>{item.price}</p>
                  <div className="card-actions justify-center my-6">
                    <button onClick={()=>handleAddtoCart(item)} className="btn border-0 border-b-yellow-600 border-b-2 text-yellow-600 hover:bg-gray-900 hover:text-yellow-600">Add to Cart</button>
                  </div>
                </div>
              </div>

              {showModal && (
        <div className="modal modal-open ">
          <div className="modal-box relative ">
            <img
                  className='w-full max-h-[424px] rounded-md shadow-md'
                    src={item.image}
                    alt="Shoes" />
            <h3 className="font-bold text-lg mt-3">{item.name}</h3>
            <p className="py-4">{item.recipe}</p>
            <p className='absolute top-10 right-10 bg-slate-950 text-white px-4 rounded-lg'>{item.price}</p>
            <div className="modal-action ">
              <button className="btn" onClick={handleShowModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
              </> 


    );
};

export default FoodCard;