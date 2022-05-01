import React from 'react';
import auth from '../../../Firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;


    if (error) {
        errorElement = <p className='text-red-600'>Error: {error?.message}</p>

    }


    if (user) {
        navigate('/');
    }

    return (
        <div>
            <div>
                <button value="button" onClick={() => signInWithGoogle()} className="px-4 py-2 rounded-full bg-purple-500 text-white hover:bg-purple-700 my-4 w-full" > Google Sign In</button>
            </div>
            {errorElement}
        </div>

    );
};

export default SocialLogin;