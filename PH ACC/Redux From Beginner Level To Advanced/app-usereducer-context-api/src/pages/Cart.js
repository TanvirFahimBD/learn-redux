import React from 'react';
import CartCard from '../components/CartCard';
import { useProducts } from '../context/ProductProvider';

const Cart = () => {
    const { state: { loading, cart, error } } = useProducts()
    let element;

    if (loading) {
        element = <p>Loading...</p>
    }

    if (error) {
        element = <p>error </p>
    }

    if (!loading && !error && cart.length < 1) {
        element = <p>No product available</p>
    }

    if (!loading && !error && cart.length > 0) {
        element = cart.map(product => <CartCard key={product._id} product={product}></CartCard>)
    }

    return (
        <div>
            {element}
        </div>
    );
};

export default Cart;