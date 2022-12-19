import React from 'react';
import { toast } from 'react-hot-toast';

const ReviewUpdateModal = ({id}) => {
    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const review = form.review.value;

        const data = { title, review }
        
        fetch(`https://food-sense-server.vercel.app/reviews/${id}`, {
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
        })
    }
    return (
        <div>
<input type="checkbox" id="reviewModal" className="modal-toggle" />
<div className="modal">
                <form onSubmit={handleUpdate} className="modal-box relative">
                <label htmlFor="reviewModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-3xl font-semibold text-secondary text-center mb-4">Update Your Review</h3>
                    <input type="text" name='title' placeholder="Review Title" className="input w-full max-w-xs focus:outline-none bg-slate-200 text-secondary mb-5 text-sm"/>
                    <textarea name='review' className="textarea focus:outline-0 bg-slate-200 w-full text-secondary"      placeholder="Review Here"></textarea>
                <div className="modal-action">
     <button type='submit'>
     <label htmlFor='reviewModal' className="btn bg-secondary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation">Update</label>
     </button>
    </div>
    </form>
</div>
        </div>
    );
};

export default ReviewUpdateModal;