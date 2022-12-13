import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';

function App() {
  return (
    <div className='text-center'>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
