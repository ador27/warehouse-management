import React from 'react';

const AddItems = () => {
    const handleAddItem = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const image = event.target.image.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const suppliername = event.target.suppliername.value;

        const item = { name, email, image, price, quantity, suppliername };


        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
            })

    }
    return (
        <div>
            <h1 className='text-4xl m-10'>Add Items to the WarHouse</h1>

            {/* <form onSubmit={handleAddItem}>
                <input type="text" placeholder='name' required /><br />
                <input type="email" placeholder='email' required /><br />
                <button type="submit">Add Item</button>
            </form> */}


        </div>
    );
};

export default AddItems;