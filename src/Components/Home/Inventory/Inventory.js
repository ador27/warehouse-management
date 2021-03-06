import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://whispering-anchorage-20545.herokuapp.com/add')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div>
            <h1 className='text-4xl m-20 font-semibold'>Manage your Inventory</h1>

            <div className='m-10'>
                {
                    items.map(item => <div className='border-4 m-10 flex-row flex'>
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

                        <Link to={`/update/${item._id}`}><button className='border-4 bg-purple-800 m-10 h-12 px-4 py-1 text-white'>Update</button></Link>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Inventory;