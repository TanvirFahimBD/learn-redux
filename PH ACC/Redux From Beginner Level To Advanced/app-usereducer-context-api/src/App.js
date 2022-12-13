import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import React from 'react';
import ProductProvider from './context/ProductProvider';

function App() {

  return (
    <div className="App">
      <ProductProvider>
        <RouterProvider router={routes} />
      </ProductProvider>
    </div>
  );
}

export default App;
