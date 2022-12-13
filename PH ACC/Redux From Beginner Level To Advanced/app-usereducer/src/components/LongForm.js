import React, { useReducer, useState } from 'react';
import { initialState, reducer } from '../state/formReducer';

const LongForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('state', state);
        // e.target.reset()
    }

    return (
        <div>
            <h1>Long Form</h1>
            <div className='d-flex'>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex align-items-center justify-content-evenly'>
                        <div className='w-50'>
                            <label htmlFor="firstName">First Name</label>
                            <br />
                            <input type="text" id='firstName' name='firstName' placeholder='Enter First Name' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} required />
                            <br />
                            <label htmlFor="email">Email</label>
                            <br />
                            <input type="email" id='email' name='email' placeholder='Enter email' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} required />
                            <br />
                            <label htmlFor="education">Education</label>
                            <br />
                            <select name='education' id="education" onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} >
                                <option value="SSC" >SSC</option>
                                <option value="HSC" >HSC</option>
                                <option value="undergrad" >Under graduate</option>
                                <option value="graduate" >Graduate</option>
                            </select>
                            <br />
                            <label htmlFor="feedback">Feedback</label>
                            <textarea name="feedback" id="feedback" cols="20" rows="3" onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} ></textarea>
                        </div >
                        <div className='w-50 mx-4'>
                            <label htmlFor="lastName">Last Name</label>
                            <br />
                            <input type="text" id='lastName' name='lastName' placeholder='Enter Last Name' onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} required />
                            <br />
                            <br />
                            <input type="radio" id='male' name='gender' value='male' onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} required />
                            <label className='ms-2' htmlFor="male">Male</label>
                            <input className='mx-2' type="radio" id='female' name='gender' value='female' onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} required />
                            <label className='mx-2' htmlFor="Female">Female</label>
                            <br />
                            <label htmlFor='pc'>Number of PC </label>
                            <br />
                            <div className='d-flex ms-4'>
                                <button className='mx-2' onClick={(e) => dispatch({ type: "INCREMENT" })}>+</button>
                                <p name='pcNum'>{state.quantity}</p>
                                <button className='mx-2' onClick={(e) => dispatch({ type: "DECREMENT" })} > - </button>
                            </div>
                            <div className='d-flex align-items-center justify-content-center mx-3'>
                                <input type="checkbox" name='term' onClick={(e) => dispatch({ type: 'TOGGLE' })} />
                                <p className='m-3'>Agree with terms </p>
                            </div>
                            <button className='my-2' type='submit' disabled={!state.term} >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LongForm;