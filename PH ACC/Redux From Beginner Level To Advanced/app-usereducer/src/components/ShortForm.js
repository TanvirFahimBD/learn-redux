import React, { useState } from 'react';

const ShortForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { email, password }
        console.log('submit', user);
        e.target.reset()
    }

    return (
        <div>
            <h1>Short Form</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" placeholder='Enter email' onBlur={(e) => setEmail(e.target.value)} required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" placeholder='Enter password' onBlur={(e) => setPassword(e.target.value)} required />
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ShortForm;