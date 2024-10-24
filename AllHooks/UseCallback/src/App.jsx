import React, { useState, useCallback } from 'react';
import ChildComponent from './Child'; // Importing the ChildComponent

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoize the handleClick function
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <ChildComponent handleClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default ParentComponent;
