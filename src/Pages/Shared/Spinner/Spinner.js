import React from 'react';
import './Spinner.css';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-[70vh]'>
            <span className="loader"></span>
        </div>
    );
};

export default Spinner;