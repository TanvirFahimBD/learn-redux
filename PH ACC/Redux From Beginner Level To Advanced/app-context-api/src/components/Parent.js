import React from 'react';

const Parent = ({ count, setCount }) => {
    return (
        <div className='my-4'>
            <h1>Parent</h1>
            <h3>{count}</h3>
            <button className='mx-3 btn btn-success' onClick={() => setCount(count + 1)}>Increase</button>
            <button className='mx-3 btn btn-danger' onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Parent;