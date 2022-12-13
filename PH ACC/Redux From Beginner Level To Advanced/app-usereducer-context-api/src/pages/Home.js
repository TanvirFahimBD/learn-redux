import React from 'react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../context/ProductProvider'

const Home = () => {
    const { state: { loading, products, error } } = useProducts()
    let element;

    if (loading) {
        element = <p>Loading...</p>
    }

    if (error) {
        element = <p>error </p>
    }

    if (!loading && !error && products.length < 1) {
        element = <p>No product available</p>
    }

    if (!loading && !error && products.length > 0) {
        element = products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
    }

    return (
        <div>
            {element}
        </div>
    );
};

export default Home;