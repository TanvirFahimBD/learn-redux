import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === 'INCREMENT') return state + action.payload.count;
        else if (action.type === 'DECREMENT') return state - action.payload.count;
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='my-5 border rounded'>
            <h1>Counter</h1>
            <h3>{state}</h3>
            <button className='btn btn-success mx-3' onClick={() => dispatch({ type: 'INCREMENT', payload: { count: 10 } })}>Increment</button>
            <button className='btn btn-danger' onClick={() => dispatch({ type: 'DECREMENT', payload: { count: 10 } })}>Decrement</button>
        </div>
    );
};

export default Counter;