import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/add')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const handleItemDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting item with id,', id);
            const url = `http://localhost:5000/add/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('Deleted');
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                })
        }

    }

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
                        <button onClick={() => handleItemDelete(item._id)} className='border-4 bg-purple-800 m-10 h-12 px-4 py-1 text-white'>Delete</button>

                    </div>)
                }

            </div>
        </div>
    );
};

export default ManageItems;