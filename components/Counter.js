import { useState, useEffect } from 'react';

const Counter = ({ end, duration ,tag}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = (duration / end) * 1000; // calculate the increment time based on duration and end value

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);
  if (tag === "h2"){
    return <h2>{count}</h2>;
  }else 
  return <span>{count}</span>;
};

export default Counter;
