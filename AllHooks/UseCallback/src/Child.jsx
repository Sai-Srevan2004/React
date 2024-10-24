import React, { useEffect } from 'react';

// Memoized Child Component
const ChildComponent = React.memo(({ handleClick }) => {

  useEffect(()=>{
    console.log("child re-rendered!")
  })
  return <button onClick={handleClick}>Click me</button>;
});

export default ChildComponent;
