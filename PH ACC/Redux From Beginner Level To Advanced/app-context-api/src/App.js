import { useState } from 'react';
import './App.css';
import Child from './components/Child';
import Parent from './components/Parent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 'textAlign': 'center' }}>
      <Parent count={count} setCount={setCount} />
      <Child count={count} setCount={setCount} />
    </div>
  );
}

export default App;
