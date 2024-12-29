import './App.css';
import React, { useState, useEffect } from 'react';
import Child1 from './child1';

function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState('');

  const setThecounter = () => {
    console.log('Antony clicked');
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData({ id: 52424 }));
  }, []);
  return (
    <div className="App">
      <h1>This is server redered App</h1>
      <h1>heelo{data.id}</h1>
      <Child1></Child1>
      <div>
        <button onClick={setThecounter}>click me</button>
        {counter + 'Counter value'}
      </div>
    </div>
  );
}

export default App;
