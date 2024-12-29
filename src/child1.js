import React, { Suspense, useState } from 'react';

const Child2 = React.lazy(() => import('./child2'));

function Child1() {
  const [tt] = useState(0);
  return (
    <div>
      <h1>This is server redered Child App{tt}</h1>

      <Suspense fallback="Loading">
        {' '}
        <Child2></Child2>
      </Suspense>
    </div>
  );
}

export default Child1;
