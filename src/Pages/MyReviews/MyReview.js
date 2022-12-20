import React from 'react';
import { RiEditBoxLine } from 'react-icons/ri';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyReview = ({ r,i, handleDelete }) => {
    const { displayName, serviceName, title, review, photoURL, _id } = r;
    
    return (
        <tr className='text-secondary'>
            <th>{i+1}</th>
            <td>{displayName}</td>
            <td>{serviceName}</td>
            <td>{title.length <= 20 ? title : title.slice(0, 25)}</td>
            <td title={review}>{review.length <= 30 ? review : review.slice(0,30) + '...'}</td>
            <td>
                <img src={photoURL} className='lg:w-14 lg:h-14 rounded-full' alt="" />
            </td>
            <td>
                
                
                    <Link to={`/reviews/${_id}`}>
                    <RiEditBoxLine size={25} className='cursor-pointer'/>
                </Link>
            </td>
            <td>
                <MdDeleteSweep onClick={() => handleDelete(_id)} size={25} className='cursor-pointer'/>
            </td>
      </tr>
    );
};

export default MyReview;