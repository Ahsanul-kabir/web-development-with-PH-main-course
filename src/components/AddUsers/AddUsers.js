import React from 'react';

const AddUsers = () => {

    const handleAddUser = (event) => {
        event.preventDefault();

        const name = event.target.name.value
        const email = event.target.email.value
        const user = { name, email }

        // Send data to server
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
            })
    }

    return (
        <div>
            <h1>Please Add a New User</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Name' required />
                <br />
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUsers;