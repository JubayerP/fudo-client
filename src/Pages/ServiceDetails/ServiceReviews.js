import React from 'react';
import { DynamicStar } from 'react-dynamic-star';

const ServiceReviews = ({ r }) => {
    const { title, review, photoURL, displayName, date, ratings } = r;
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 mx-auto rounded-md border border-primary">
            <div>
                <h4 className='text-xl font-semibold text-secondary'>{title}</h4>
            </div>
	<div className='flex items-center space-x-4 my-2'>
				{
					ratings ? <>
						<DynamicStar rating={ratings} totalStars={5} emptyStarColor={'#e2e8f0'} width='20' height='20' />
					<p className='text-xl text-secondary'>({ratings})</p>
					</>
						:
						<p className='text-orange-500'>User Not Rated His Review</p>
				}
                </div>
	        <div className="py-4 text-sm text-secondary">
                <p>{review}</p>
            </div>
            <div className="flex space-x-4">
			<div>
				<img src={photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
                        <h4 className="font-semibold text-secondary">{displayName}</h4>
				<span className="text-xs text-secondary">{date}</span>
			</div>
		</div>
</div>
    );
};

export default ServiceReviews;