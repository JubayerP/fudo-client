import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/reviews?email=${user?.email}`;
        fetch(url)
            .then(res => res.json())
        .then(data => setMyReviews(data))
    }, [user?.email])
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? You want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myReviews.filter(rv => rv._id !== id);
                        setMyReviews(remaining)
                        toast.error('Your Review Has Been Removed!')
                    }
                })        
        }
    }

    return (
        <>
            {
                myReviews.length === 0
                    ? <>
                        <h2 className="text-5xl font-bold text-primary flex justify-center items-center h-[50vh]">
                            No Reviews Were Added.
                        </h2>
                    </>
                    : <div className="overflow-x-auto my-10 w-11/12 mx-auto">
                    <table className="table w-full">
                      
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Service Name</th>
                          <th>Review Title</th>
                                          <th>Review</th>
                                          <th>Photo</th>
                                          <th>Edit</th>
                                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                                      {
                                    myReviews.map((r, i) => <MyReview key={r._id} r={r} i={i} handleDelete={handleDelete} />)
                        }
                        
                      </tbody>
                    </table>
                  </div>
            }
        </>
    );
};

export default MyReviews;