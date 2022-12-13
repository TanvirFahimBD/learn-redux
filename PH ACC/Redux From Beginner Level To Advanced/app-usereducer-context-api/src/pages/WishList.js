import React from 'react';
import WishListCard from '../components/WishListCard';
import { useProducts } from '../context/ProductProvider';

const WishList = () => {
    const { state: { loading, wishlist, error } } = useProducts()

    console.log('wishlist', wishlist);

    let element;

    if (loading) {
        element = <p>Loading...</p>
    }

    if (error) {
        element = <p>error </p>
    }

    if (!loading && !error && wishlist.length < 1) {
        element = <p>No product available</p>
    }

    if (!loading && !error && wishlist.length > 0) {
        element = wishlist.map(product => <WishListCard key={product._id} product={product}></WishListCard>)
    }

    return (
        <div>
            {element}
        </div>
    );
};

export default WishList;