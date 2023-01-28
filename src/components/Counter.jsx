import React, { useState } from 'react';

export default function Counter({ total, addClicked }) {
  const [count, setCount] = useState(0);
  return (
    <div className='counter'>
      <h1 className='count'>
        {count}
        <span className='total'>/{total}</span>
      </h1>
      <button
        className='btn'
        onClick={() => {
          setCount((prev) => prev + 1);
          addClicked();
        }}>
        Add +
      </button>
    </div>
  );
}
