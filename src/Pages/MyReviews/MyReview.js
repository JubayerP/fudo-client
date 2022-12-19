import React from 'react';
import { RiEditBoxLine } from 'react-icons/ri';
import { MdDeleteSweep } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import ReviewUpdateModal from '../Modal/ReviewUpdateModal';

const MyReview = ({ r,i, handleDelete }) => {
    const { displayName, serviceName, title, review, photoURL, _id } = r;
    
    return (
        <tr className='text-secondary'>
            <th>{i+1}</th>
            <td>{displayName}</td>
            <td>{serviceName}</td>
            <td>{title.length <= 20 ? title : title.slice(0, 25)}</td>
            <td title={review}>{review.length <= 30 ? review : review.slice(0,30)}...</td>
            <td>
                <img src={photoURL} className='lg:w-14 lg:h-14 rounded-full' alt="" />
            </td>
            <td>
                <label htmlFor="reviewModal">
                <RiEditBoxLine size={25} className='cursor-pointer'/>
                </label>
            </td>
            <td>
                <MdDeleteSweep onClick={() => handleDelete(_id)} size={25} className='cursor-pointer'/>
            </td>
            <ReviewUpdateModal id={_id} />
      </tr>
    );
};

export default MyReview;