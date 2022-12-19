import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Spinner from '../Shared/Spinner/Spinner';
import MyReview from './MyReview';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    const [loading, setLoading] = useState(false)
    useTitle('My Reviews')
    useEffect(() => {
        setLoading(true)

        const url = `https://food-sense-server.vercel.app/reviews?email=${user?.email}`;
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('fudo-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json()
            })
            .then(data => {
                setMyReviews(data)
                setLoading(false)
        })
    }, [user?.email, logOut])
    
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure? You want to delete?')
        if (proceed) {
            fetch(`https://food-sense-server.vercel.app/reviews/${id}`, {
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
                    : 
                      loading ? <Spinner /> : 
                    <div className="overflow-x-auto my-10 w-11/12 mx-auto">
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