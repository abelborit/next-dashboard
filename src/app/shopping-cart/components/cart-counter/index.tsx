'use client';

import { useState } from 'react';

interface CartCounterProps {
  value?: number;
}

export const CartCounter = ({ value = 10 }: CartCounterProps) => {
  const [counter, setCounter] = useState(value);

  const handleCounter = (option: number) => {
    setCounter(prevState => prevState + option);
  };

  return (
    <>
      <span className="text-6xl mt-4">{counter}</span>

      <div className="flex mt-4">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] cursor-pointer mr-2"
          onClick={() => handleCounter(+1)}
          type="button"
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] cursor-pointer ml-2"
          onClick={() => handleCounter(-1)}
          type="button"
        >
          -1
        </button>
      </div>
    </>
  );
};
