import React from 'react';

const Discount = () => {
    return (
        <div className='my-20 container mx-auto'>
            <div className='flex justify-between items-center mb-14'>
                <div>
                    <h1 className="text-6xl font-bold text-secondary">Popular Discount</h1>
                </div>
                <div>
                    <div className='flex items-center'>
                        <h3 className='text-3xl text-secondary mr-2'>Countdown :</h3>
                        <span className='text-6xl font-bold text-primary'>22 : </span>
                        <span className='text-6xl font-bold text-primary'>15</span>
                    </div>
                </div>
            </div>


            <div className='flex gap-10 items-center'>
                <div className='bg-accent px-4 py-4 rounded-lg'>
                    <h3 className="text-4xl font-bold text-secondary mb-4">Cheese Stuffed Burgers</h3>
                    <p className="text-xl text-secondary mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>

                    <div className='flex justify-between'>
                        <h4 className='font-bold text-primary text-3xl'>$8.99</h4>
                        <button className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation">Order Now</button>
                    </div>

                    <img className='' src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/burger-95CWFUB-removebg.png" alt="" />
                </div>
                <div className='bg-accent px-4 py-4 rounded-lg'>
                    <h3 className="text-4xl font-bold text-secondary mb-4">Cheese Stuffed Burgers</h3>
                    <p className="text-xl text-secondary mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>

                    <div className='flex justify-between'>
                        <h4 className='font-bold text-primary text-3xl'>$4.99</h4>
                        <button className="btn bg-primary hover:bg-primary border-0 px-8 rounded-full text-white capitalize no-animation">Order Now</button>
                    </div>

                    <img className='w-[93%]' src="https://templatekit.tokomoo.com/deliverykit/wp-content/uploads/sites/26/2021/07/plate-of-asian-food-GF8U9TQ-removebg.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Discount;