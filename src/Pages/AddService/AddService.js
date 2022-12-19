import React from 'react';

const AddService = () => {
    return (
        <div>
            <h2 className="text-5xl font-semibold text-center text-secondary">Add Your Food Service</h2>

            <form className='max-w-3xl mx-auto my-10'>
                <div className='grid lg:grid-cols-2 gap-4'>
                <input type="text" placeholder="Service Name" className="input focus:outline-none bg-slate-200 text-secondary w-full" />
                <input type="text" placeholder="PhotoURL" className="input focus:outline-none bg-slate-200 text-secondary w-full" />
                <textarea type="text" rows={5} placeholder="Description" className="textarea focus:outline-none bg-slate-200 text-secondary w-full col-span-2" />
                <input type="text" placeholder="Ratings e.g. 4.5" className="input focus:outline-none bg-slate-200 text-secondary w-full " />
                <input type="text" placeholder="Price" className="input focus:outline-none bg-slate-200 text-secondary w-full " />
                </div>

                <button className="btn bg-primary hover:bg-primary border-0 px-20 rounded-full text-white capitalize no-animation mt-5">Add Service</button>
            </form>
        </div>
    );
};

export default AddService;