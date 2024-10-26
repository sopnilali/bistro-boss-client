import SectionTitle from '../../../shared/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet-async';


  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {



    const {handleSubmit, reset, register}= useForm();

    const axiosPublic = useAxiosPublic();
    const [axiosSecure] = useAxiosSecure();

    const handleAddItems =  async(data) => {
        const price = parseFloat(data?.price);

        const imageFile = { image: data.image[0] }

            const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
        if (res.data.success) {
            const newData = {
                name: data?.name,
                category: data?.category,
                price: price,
                recipe: data?.recipe,
                image: res.data.data?.display_url
            }
            axiosSecure.post('/api/menu', newData)
            .then(res => {
                reset();
                if(res.data.status) {
                    reset();
                    Swal.fire({
                        title: 'Success',
                        text: `${data?.name} item is Added Successfully`,
                        icon:'success',
                        confirmButtonColor: '#3085d6'
                    })
                }
            })
        }
    }

    return (
        <div>
        <Helmet>
            <title> Add an item | Bistro Boss</title>
        </Helmet>
            <SectionTitle subtitle={"What's new?"} Title={'ADD AN ITEM'}/>
            <div className="card bg-gray-200 w-full min-h-[600px] max-w-4xl shrink-0 drop-shadow-md mx-auto">
                <form onSubmit={handleSubmit(handleAddItems)} className="card-body space-y-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input type="text" {...register('name', {required: true})} placeholder="Type your recipe" className="input input-bordered" />
                    </div>
                    <div className='flex gap-3 justify-between'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select {...register('category')} className="select select-bordered " >
                                <option disabled selected>Choose Category</option>
                                <option value="salad">salad</option>
                                <option value="dessert">dessert</option>
                                <option value="pizza">pizza</option>
                                <option value="breakfast">breakfast</option>
                                <option value="drinks">drinks</option>
                                <option value="popular">popular</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register('price')} placeholder="Type price" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered textarea-md min-h-32" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="my-1 -mb-6">
                    <input type="file" {...register('image')} className=" file-input " />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className="btn btn-accent">Add Items</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddItems;