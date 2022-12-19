import React from 'react';
import { toast } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service')
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const desc = form.desc.value;
        const ratings = form.ratings.value;
        const price = form.price.value;

        const data = { name, img, desc, ratings, price };

        fetch('http://localhost:5000/Allservices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('You Just Added Your Favorite Food!')
                }
        })
    }
    return (
        <div>
            <h2 className="text-5xl font-semibold text-center text-secondary mt-10">Add Your Food Service</h2>

            <form onSubmit={handleSubmit} className='lg:max-w-3xl max-w-md mx-auto my-10'>
                <div className='grid lg:grid-cols-2 gap-4'>
                <input type="text" placeholder="Service Name" name='name' className="input focus:outline-none bg-slate-200 text-secondary w-full" />
                <input type="text" placeholder="PhotoURL" name='img' className="input focus:outline-none bg-slate-200 text-secondary w-full" />
                <textarea type="text" rows={5} placeholder="Description" name='desc' className="textarea focus:outline-none bg-slate-200 text-secondary w-full col-span-2" />
                <input type="text" placeholder="Ratings e.g. 4.5" name='ratings' className="input focus:outline-none bg-slate-200 text-secondary w-full " />
                <input type="text" placeholder="Price" name='price' className="input focus:outline-none bg-slate-200 text-secondary w-full " />
                </div>

                <button className="btn bg-primary hover:bg-primary border-0 px-20 rounded-full text-white capitalize no-animation mt-5">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;