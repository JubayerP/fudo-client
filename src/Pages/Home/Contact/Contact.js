import React from 'react';
import contact from '../../../assets/contact.png'

const Contact = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content lg:flex-row-reverse flex-col justify-around w-full">
      <img className='w-[300px]' src={contact} alt="" />
                <div className="card flex-shrink-0 w-full max-w-lg bg-base-100">
                    <h2 className="lg:text-5xl text-3xl font-bold text-secondary">
                    Express food ordering with delivery
                    </h2>
      <div className="card-body">
        <div className="form-control">
          <input type="text" placeholder="Name" className="input input-bordered focus:outline-none border-gray-400 rounded-full" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Address" className="input input-bordered focus:outline-none border-gray-400 rounded-full" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Email" className="input input-bordered focus:outline-none border-gray-400 rounded-full" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Phone" className="input input-bordered focus:outline-none border-gray-400 rounded-full" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary no-animation rounded-full text-white">Contact</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Contact;