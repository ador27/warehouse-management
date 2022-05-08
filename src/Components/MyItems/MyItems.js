import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init'

const MyItems = () => {
    const [item] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {

        const getItems = async () => {
            const email = item.email;
            const url = `http://localhost:5000/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }

        getItems();


    }, [item])
    return (
        <div>
            <h1 className='text-4xl m-10'>My Items: {myItems.length}</h1>
            <div className='m-10'>
                {
                    myItems.map(item => <div className='border-4 m-10 flex-row flex'>
                        <div>
                            <img className='object-contain h-48 w-96 ...' src={item.image} alt="" />
                        </div>
                        <div className='text-left'>
                            <h2>Name: {item.name}</h2>
                            <h2>Description: {item.description}</h2>
                            <h2>Price: {item.price}</h2>
                            <h2>Quantity: {item.quantity}</h2>
                            <h2>Supplier Name: {item.suppliername}</h2>
                        </div>

                    </div>)
                }

            </div>

        </div>
    );
};

export default MyItems;