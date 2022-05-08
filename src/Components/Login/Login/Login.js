import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import mail from '../../../Images/icons/mail.png'
import password from '../../../Images/icons/password.png'
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>

    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate("/register");
    }

    // const resetPassword = async () => {
    //     const email = emailRef.current.value;
    //     if (email) {
    //         await sendPasswordResetEmail(email);
    //         toast('Sent email');
    //     } else {
    //         toast('please give your email')
    //     }
    // }

    return (
        <div>
            <form onSubmit={handleSubmit} className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto">
                <h2 className="text-2xl my-4">Login</h2>
                <div className="w-full p-2 justify-start flex flex-col">
                    <div className=" flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={mail} alt="" />
                        </span>
                        <input ref={emailRef} className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1" id="" name="email" required={true} placeholder="email" />
                    </div>

                    <div className="my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={password} alt="" />
                        </span>
                        <input type="password" ref={passwordRef} className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1" id="" name="password" placeholder="password" required={true} />
                    </div>
                    {errorElement}
                    <p>New to travel?
                        <Link to="/register" className=' text-blue-500 no-underline mx-2'>Please Register</Link>
                    </p>
                    <button type='submit' value="button" className="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 my-4 w-full" >Login</button>
                </div>
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Login;