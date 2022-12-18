import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/Login/login2.jpg';

const SignUp = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        url: '',
        email: '',
        password: ''
    })

    const handleSubmit = e => {
        e.preventDefault();
        const email = userInfo.email
        const password = userInfo.password

        const user = { email, password }
        console.log(user);
    }

    const handleNameChange = e => {
        const name = e.target.value;
        setUserInfo({...userInfo, name: name})
    }

    const handleUrlChange = e => {
        const url = e.target.value;
        setUserInfo({...userInfo, url: url})
    }

    const handleEmailChange = e => {
        const email = e.target.value;
        setUserInfo({ ...userInfo, email: email })
    }
    const handlePasswordChange = e => {
        const password = e.target.value;
        setUserInfo({ ...userInfo, password: password })
    }
    return (
        <div className='container mx-auto my-10 flex justify-around items-center'>
            <img src={login} className='w-1/3 rounded-2xl' alt="" />
            <div>
                <h1 className="text-6xl font-bold text-secondary mb-10 text-center">Sign Up Now</h1>

                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='max-w-md'>
                        <input type="text" placeholder="Full Name" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-5 text-secondary block" onChange={handleNameChange} defaultValue={userInfo.name} />
                        <input type="text" placeholder="Photo URL" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-5 text-secondary" onChange={handleUrlChange} defaultValue={userInfo.url} />
                        <input type="email" placeholder="Email" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-5 text-secondary" onChange={handleEmailChange} defaultValue={userInfo.email} />
                        <input type="password" placeholder="Password" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-5 text-secondary" onChange={handlePasswordChange} defaultValue={userInfo.password} />
                    </div>
                    <button className="btn bg-primary hover:bg-primary border-0 px-20 rounded-full text-white capitalize no-animation">Sign In</button>

                    <p className='text-secondary font-semibold text-lg mt-5'>Already Have an Account? <Link className='text-primary hover:underline' to='/signin'>
                    Sign In
                    </Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;