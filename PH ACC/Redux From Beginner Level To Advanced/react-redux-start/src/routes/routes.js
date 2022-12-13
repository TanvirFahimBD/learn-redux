import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import About from '../page/About';
import Cart from '../page/Cart';
import Home from '../page/Home';
import TopRated from '../page/TopRated';
import WishList from '../page/WishList';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/top-rated',
                element: <TopRated />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/wish-list',
                element: <WishList />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ]
    }
]);

export default routes;