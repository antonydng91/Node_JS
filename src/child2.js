import React, { useState } from 'react';

function Child2() {
  const [counter, setCounter] = useState(0);

  const setThecounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={setThecounter}>click me</button>
      {counter + 'Counter value'}
      <h1>This is server redered Child App which was lazy loaded</h1>
    </div>
  );
}

export default Child2;
