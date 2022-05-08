import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [])
    const handleUpdateItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const suppliername = event.target.suppliername.value;

        const item = { name, email, image, description, price, quantity, suppliername };


        const url = `http://localhost:5000/item/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('Item updated successfully!!!');
                event.target.reset();
            })

    }

    return (
        <div>
            <h1 className='text-4xl m-10 font-semibold'>Update Item: {item.name}</h1>
            <form onSubmit={handleUpdateItem}>
                <input className='border-2 h-10 w-30 m-2' type="text" name='name' placeholder='Name' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="email" name='email' placeholder='E-mail' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="text" name='image' placeholder='Image' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="text" name='description' placeholder='Description' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="number" name='price' placeholder='Price' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="number" name='quantity' placeholder='Quantity' required /> <br />
                <input className='border-2 h-10 w-30 m-2' type="text" name='suppliername' placeholder='Supplier Name' required /> <br />
                <input className='border-2 text-white bg-slate-600 px-4 py-1' type="submit" value="Update Item" />

            </form>
        </div>
    );
};

export default UpdateItem;