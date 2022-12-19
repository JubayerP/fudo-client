import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/Login/login2.jpg';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { createUser, updateUsersProfile } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({
        name: '',
        url: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const location = useLocation()
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = e => {
        e.preventDefault();
        createUser(userInfo.email, userInfo.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserInfo({
                name: '',
                url: '',
                email: '',
                password: ''})
                toast.success('Hurrah!, You Are In!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff'
                    }
                })
                navigate(from, {replace: true})
                updateUsersProfile(userInfo.name, userInfo.url)
                .then(result => {
                    // User Updated
                })
                .catch(e => console.log(e))
            })
            .catch(e => {
            console.log(e);
        })
    }

    const handleNameChange = e => {
        const name = e.target.value;
        setUserInfo({...userInfo, name: e.target.value})
    }

    const handleUrlChange = e => {
        const url = e.target.value;
        setUserInfo({...userInfo, url: e.target.value})
    }

    const handleEmailChange = e => {
        const email = e.target.value;
        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
            setErrors({...errors, email: 'Please Provide a Valid Email!'})
            setUserInfo({ ...userInfo, email: e.target.value })
        } else {
            setErrors({ ...errors, email: '' })
            setUserInfo({ ...userInfo, email: e.target.value })
        }
    }
    const handlePasswordChange = e => {
        const password = e.target.value;
        if (!/(?=.*?[A-Z])/.test(password)) {
            setErrors({ ...errors, password: 'At Least One Upper Case' })
            setUserInfo({ ...userInfo, password: e.target.value })
        }
        else if (!/(?=.*?[0-9])/.test(password)) {
            setErrors({ ...errors, password: 'At Least One Digit' })
            setUserInfo({ ...userInfo, password: e.target.value })
        }
        else if (!/.{8,}/.test(password)) {
            setErrors({...errors, password: 'Minimum eight characters'})
            setUserInfo({ ...userInfo, password: e.target.value })
        }
        else {
            setErrors({ ...errors, password: '' });
            setUserInfo({ ...userInfo, password: e.target.value })
        }
    }
    return (
        <div className='container mx-auto my-10 flex lg:flex-row flex-col lg:space-y-0 space-y-10 justify-around items-center'>
            <img src={login} className='lg:w-1/3 w-4/5 rounded-2xl' alt="" />
            <div>
                <h1 className="text-6xl font-bold text-secondary mb-10 text-center">Sign Up Now</h1>

                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='max-w-md'>
                        <input type="text" placeholder="Full Name" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-5 text-secondary block" onChange={handleNameChange} value={userInfo.name} />
                        <input type="text" placeholder="Photo URL" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-5 text-secondary" onChange={handleUrlChange} value={userInfo.url} />
                        <input type="email" placeholder="Email" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-0 text-secondary" onChange={handleEmailChange} value={userInfo.email} />
                        <p className='text-red-500 mb-5 ml-2'>{errors.email}</p>
                        <input type="password" placeholder="Password" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full text-secondary" onChange={handlePasswordChange} value={userInfo.password} />
                        <p className='text-red-500 mb-5 ml-2'>{errors.password}</p>
                    </div>
                    <button type='submit' className="btn bg-primary hover:bg-primary border-0 px-20 rounded-full text-white capitalize no-animation">Sign Up</button>

                    <p className='text-secondary font-semibold text-lg mt-5'>Already Have an Account? <Link className='text-primary hover:underline' to='/signin'>
                    Sign In
                    </Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;