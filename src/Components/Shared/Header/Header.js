import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='w-full top-0 bg-blue-800 px-12 py-4 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link className='font-sans font-bold text-3xl text-white' to='/'>
                    AFFINITY
                </Link>
            </div>
            <div className='flex font-black gap-3 text-[16px]'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/blogs'>Blogs</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>
            </div>
        </div>
    );
};

export default Header;