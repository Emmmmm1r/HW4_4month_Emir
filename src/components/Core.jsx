import React, { useState } from 'react';

const Core = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const submitData = (e) => {
        e.preventDefault();
        console.log(`name: ${name}, phone: ${phone}, email ${email}`);
        alert(`name: ${name}, phone: ${phone}, email ${email}`);
    };

    return (
        <div className="container">
            <form onSubmit={submitData}>
                <label>Name</label>
                <br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                <label>Phone</label>
                <br/>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

                <label>Email</label>
                <br/>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Core;
