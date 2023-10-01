import React, { useState, useEffect } from "react";

function HookIntervalCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

//   We Can specifiy the useEffect multiple times based on the requirments
  useEffect(() =>{
    document.title = `You Clicked ${count} times`;
  })

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{count}</div>;
}

export default HookIntervalCounter;
