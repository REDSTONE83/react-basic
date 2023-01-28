import React, { useState } from 'react';
import Counter from './components/Counter';

export default function AppCounter() {
  const [count, setCount] = useState(0);
  const handleAddClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        Total Count: {count} {count > 10 ? '!!' : ''}
      </h1>
      <Counter total={count} addClicked={handleAddClick} />
      <Counter total={count} addClicked={handleAddClick} />
    </div>
  );
}
