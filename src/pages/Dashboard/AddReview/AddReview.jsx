import React, { useState } from 'react';
import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddReview = () => {


    const [rating, setRating] = useState(0)
    const { handleSubmit, reset, register } = useForm();
    console.log(rating)

    const axiosPublic = useAxiosPublic();

    const handleReview = (data) => {
        // add review logic here
        console.log(data)
        
        const reviewData = {
             name : data.name,
             details : data.details,
             rating : rating,
        }
        axiosPublic.post('/api/review',reviewData)
        .then(res => {
            reset()
            Swal.fire({
                title: 'Review Added Successfully',
                text: 'Your review has been added successfully',
                icon:'success',
            })
        })
    }


    return (
        <>
         <Helmet>
            <title> Add Your Review | Bistro Boss</title>
        </Helmet>
            <h2 className="text-4xl">Add Review Route</h2>

            <div>
                <SectionTitle subtitle={'Sharing is Caring!!!'} Title={'GIVE A REVIEW...'} />
            </div>
            <div className="card bg-gray-200 w-full min-h-[600px] max-w-4xl shrink-0 drop-shadow-md mx-auto">

                <form onSubmit={handleSubmit(handleReview)} className="card-body space-y-4">
                    <h3 className="text-4xl text-gray-800 text-center uppercase">Rate us!</h3>
                    <div className="form-control ">
                        <div className='flex justify-center'>
                            <Rating value={rating} style={{ maxWidth: 200 }} onChange={setRating}  className='pb-8' />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" {...register('name', { required: true })} placeholder="Type Your Name..." className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review Details</span>
                        </label>
                        <textarea {...register('details')} className="textarea textarea-bordered textarea-md min-h-32" placeholder="Review in detail"></textarea>
                    </div>
                    <div className="mt-6">
                        <button type='submit' className="btn btn-accent text-white bg-gradient-to-r from-[#835D23] to-[#B58130]">Send Reviews <FaPaperPlane /></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddReview;