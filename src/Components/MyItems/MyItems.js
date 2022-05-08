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
            const url = `https://whispering-anchorage-20545.herokuapp.com/myitems?email=${email}`;
            const { data } = await axios.get(url);
            setMyItems(data);
        }

        getItems();

    }, [item])
    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting item with id,', id);
            const url = `https://whispering-anchorage-20545.herokuapp.com/add/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted');
                        const remaining = myItems.filter(item => item._id !== id);
                        setMyItems(remaining);
                    }
                })
        }

    }
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
                        <button onClick={() => handleItemDelete(item._id)} className='border-4 bg-purple-800 m-10 h-12 px-4 py-1 text-white'>Delete</button>

                    </div>)
                }

            </div>

        </div>
    );
};

export default MyItems;