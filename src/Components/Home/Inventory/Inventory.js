import React, { useEffect, useState } from 'react';

const Inventory = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/add')
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

                    </div>)
                }
            </div>
        </div>
    );
};

export default Inventory;