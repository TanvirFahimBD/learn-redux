import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log('products', products)
    return (
        <div>
            {products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)}
        </div>
    );
};

export default Home;