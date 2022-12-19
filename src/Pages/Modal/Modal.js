import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';


const Modal = ({service}) => {
    const { user } = useContext(AuthContext);
    const handleSubmitReview = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const review = form.review.value;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        const email = user.email;
        const serviceName = service.name;
        const serviceId = service._id;
        const date = new Date()

        const data = { title, review, displayName, photoURL, email, serviceName, serviceId, date };
        
        fetch('https://food-sense-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                toast.success('You Just Reviewd Your Favorite Food!')
            }
        })
    }
    return (
        <div>
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
                <form onSubmit={handleSubmitReview} className="modal-box relative">
                <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-3xl font-semibold text-secondary text-center mb-4">Please Review Us.</h3>
                    <input type="text" name='title' placeholder="Review Title" className="input w-full max-w-xs focus:outline-none bg-slate-200 text-secondary mb-5 text-sm"/>
                    <textarea name='review' className="textarea focus:outline-0 bg-slate-200 w-full text-secondary"      placeholder="Review Here"></textarea>
                <div className="modal-action">
     <button type='submit'>
     <label htmlFor='my-modal-3' className="btn bg-secondary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation">Add</label>
     </button>
    </div>
    </form>
</div>
        </div>
    );
};

export default Modal;