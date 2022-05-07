import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/add')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (

        <div>
            <h2 className='text-4xl m-10 font-semibold'>Total Items: {items.length}</h2>
            <Link to="/add/additems" className='text-white no-underline border-2 bg-red-800 px-5 py-2'>Add New Item</Link>

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
                {/*  {
                    items.map(item => <h4>Product Name:{item.name} Description:{item.description}</h4>)
                }
 */}

            </div>
        </div>
    );
};

export default ManageItems;