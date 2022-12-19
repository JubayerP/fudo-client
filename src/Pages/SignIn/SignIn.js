import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import login from '../../assets/Login/login2.jpg';
import { AuthContext } from '../../context/AuthProvider';

const SignIn = () => {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });
    console.log(userInfo);

    const { signIn, googleProvider } = useContext(AuthContext);
    const gProvider = new GoogleAuthProvider();

    const handleSubmit = e => {
        e.preventDefault();
        const email = userInfo.email
        const password = userInfo.password

        signIn(email, password)
            .then(result => {
                const user = result.user;
                setUserInfo({
                    email: '',
                    password: '',
                })
                console.log(user)
                toast.success('Hurrah!, You Are Logged In!', {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff'
                    }
                })
            })
            .catch(e => {
                toast.error(e.message, {
                    style: {
                        borderRadius: '10px',
                        background: '#ED4337',
                        color: '#fff'
                    }
                })
        })
    }

    const handleEmailChange = e => {
        const email = e.target.value;
        setUserInfo({ ...userInfo, email })
    }
    const handlePasswordChange = e => {
        const password = e.target.value;
        setUserInfo({ ...userInfo, password })
    }


    const handleGoogleSignIn = () => {
        googleProvider(gProvider)
        .then(result => {
            const user = result.user;
            toast.success('Hurrah!, You Are In!', {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff'
                }
            })
        })
    }



    return (
        <div className='container mx-auto my-10 flex justify-around items-center'>
            <img src={login} className='w-1/3 rounded-2xl' alt="" />
            <div>
                <h1 className="text-6xl font-bold text-secondary mb-10 text-center">SignIn Now</h1>

                <form onSubmit={handleSubmit} className='w-full'>
                    <div>
                        <input type="email" placeholder="Email" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-5 text-secondary" onChange={handleEmailChange} value={userInfo.email} />
                        <input type="password" placeholder="Password" className="input input-bordered max-w-xl w-full focus:outline-none focus:border-primary duration-200 border-gray-400 rounded-full mb-5 text-secondary" onChange={handlePasswordChange} value={userInfo.password} />
                    </div>
                    <button className="btn bg-primary hover:bg-primary border-0 px-20 rounded-full text-white capitalize no-animation">Sign In</button>

                    <p className='text-secondary font-semibold text-lg mt-5'>New to Fudo? <Link className='text-primary hover:underline' to='/signup'>
                    Sign Up
                    </Link></p>
                </form>

                <div className='flex items-center mt-10'>
                    <div className='w-1/2 bg-secondary h-[1px]'></div>
                    <p className='mx-4'>OR</p>
                    <div className='w-1/2 bg-secondary h-[1px]'></div>
                </div>
                <div className='text-center'>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline hover:bg-primary border-primary text-secondary mt-10 px-20 rounded-full capitalize no-animation">Sign In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;