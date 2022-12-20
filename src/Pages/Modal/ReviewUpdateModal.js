import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ReviewUpdateModal = () => {

    const reviewOne = useLoaderData()
    const { _id, review, title } = reviewOne;
    const navigate = useNavigate()

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const review = form.review.value;

        const data = { title, review }
        
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                toast('Review Updated!')
                }
                navigate('/myreviews');
        })
    }
    return (
<div className="max-w-md mx-auto mt-20 p-10 shadow rounded-md mb-20">
                <form onSubmit={handleUpdate} className="">
                    <h3 className="text-3xl font-semibold text-secondary text-center mb-4">Update Your Review</h3>
                    <input type="text" name='title' defaultValue={title} placeholder="Review Title" className="input w-full max-w-xs focus:outline-none bg-slate-200 text-secondary mb-5 text-sm"/>
                    <textarea name='review' defaultValue={review} className="textarea focus:outline-0 bg-slate-200 w-full text-secondary" placeholder="Review Here"></textarea>
                <div className="mt-2">
                <button type='submit' className="btn bg-secondary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation">
                    Update
                </button>
                </div>
            </form>
</div>
    );
};

export default ReviewUpdateModal;