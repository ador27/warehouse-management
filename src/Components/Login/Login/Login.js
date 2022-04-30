import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../../../Images/icons/mail.png'
import password from '../../../Images/icons/password.png'

const Login = () => {
    return (
        <div>
            <form className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto">
                <h2 className="text-2xl my-4">Login</h2>
                <div className="w-full p-2 justify-start flex flex-col">
                    <div className=" flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={mail} alt="" />
                        </span>
                        <input value="" className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1" id="" name="email" required="true" placeholder="email" />
                    </div>

                    <div className="my-4 flex flex-row">
                        <span className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
                            <img src={password} alt="" />
                        </span>
                        <input type="password" value="" className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1" id="" name="password" placeholder="password" required="true" />
                    </div>
                    <button value="button" className="px-4 py-2 rounded bg-blue-400 text-white hover:bg-blue-700 my-4 w-full" id="whoobe-ibemp">Login</button>
                </div>
            </form>
            <p>New to site?
                <Link to="/register" className=' text-blue-500 no-underline mx-2'>Please Register</Link>
            </p>
        </div>
    );
};

export default Login;