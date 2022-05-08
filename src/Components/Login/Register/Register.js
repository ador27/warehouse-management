import React, { useRef } from 'react';
import username from '../../../Images/icons/user.png';
import mail from '../../../Images/icons/mail.png';
import password from '../../../Images/icons/password.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    // if (loading || updating) {
    //     return <Loading></Loading>
    // }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(name, email, password);

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        // toast('Updated profile');
        navigate('/');
    }
    return (
        <div>
            <form onSubmit={handleRegister} className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto">
                <h2 className="text-2xl my-4">Register</h2>
                <div className="w-full p-2 justify-start flex flex-col">
                    <div className=" my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={username} alt="" />
                        </span>
                        <input className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1" id="" name="username" type='text' placeholder="username" ref={nameRef} />
                    </div>
                    <div className="my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={mail} alt="" />
                        </span>
                        <input className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1" id="" name="email" type='email' placeholder="email" ref={emailRef} required />
                    </div>

                    <div className="my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={password} alt="" />
                        </span>
                        <input type="password" className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1" id="" name="password" placeholder="password" ref={passwordRef} required />
                    </div>
                    <button type='submit' value="button" className="px-4 py-2 rounded bg-orange-400 text-white hover:bg-orange-700 my-4 w-full" >Register</button>
                </div>
                <p>Already have an account?
                    <Link to="/login" className=' text-blue-500 no-underline mx-2'>Please Login</Link>
                </p>
                <SocialLogin></SocialLogin>
            </form>

        </div>
    );
};

export default Register;