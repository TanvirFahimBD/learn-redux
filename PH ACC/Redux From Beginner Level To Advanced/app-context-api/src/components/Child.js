import React from 'react';

const Child = ({ count, setCount }) => {
    return (
        <div>
            <h1>Child</h1>
            <h3>{count}</h3>
            <button className='mx-3 btn btn-success' onClick={() => setCount(count + 1)}>Increase</button>
            <button className='mx-3 btn btn-danger' onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default Child;