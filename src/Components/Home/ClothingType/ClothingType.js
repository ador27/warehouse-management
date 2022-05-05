import React from 'react';
import FloralWhite from '../../../Images/images/IMG_0353.JPG';
import PlatinumBlack from '../../../Images/images/IMG_0368.JPG';
import PartyMarron from '../../../Images/images/IMG_0543.JPG';

const ClothingType = () => {
    return (
        <div>
            <h1 className='text-4xl m-12'>Clothing Types</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
                <a href="www.facebook.com/theaffinity.bd">
                    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                        <img className='object-cover h-64 w-96 ...' src={FloralWhite} alt="" />
                        <div className='p-5'>
                            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Floral White Punjabi EID COLLECTION 2022</h5>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Best Premium Collection of AFFINITY in this Eid of 2022. It's a pure cotton with china silk which looks more gorgeous.</p>
                        </div>
                    </div>
                </a>
                <a href="www.facebook.com/theaffinity.bd">
                    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                        <img className='object-cover h-64 w-96 ...' src={PlatinumBlack} alt="" />
                        <div className='p-5'>
                            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Platinum Black Punjabi EID COLLECTION 2022</h5>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Best Premium Collection of AFFINITY in this Eid of 2022. It's a pure cotton with china silk which looks more gorgeous.</p>
                        </div>
                    </div>
                </a>
                <a href="www.facebook.com/theaffinity.bd">
                    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
                        <img className='object-cover h-64 w-96 ...' src={PartyMarron} alt="" />
                        <div className='p-5'>
                            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Party Marron Punjabi EID COLLECTION 2022</h5>
                            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Best Premium Collection of AFFINITY in this Eid of 2022. It's a pure cotton with china silk which looks more gorgeous.</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default ClothingType;