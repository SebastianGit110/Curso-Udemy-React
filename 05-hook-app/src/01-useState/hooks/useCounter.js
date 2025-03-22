import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  // Si no me mandan un valor, va a ser 10
  const [counter, setCounter] = useState(initialValue);

  /* 
  const obj = {};
  obj.toString; -> [object Object]
  */

  // value = 1 si no envian nada, value es 1
  const increment = (value = 1) => {
    setCounter(counter + value);
  };
  const reset = () => {
    setCounter(initialValue);
  };
  const decrement = (value = 1) => {
    if (counter - value <= 0) return;
    setCounter(counter - value);
  };

  return { counter, increment, reset, decrement };
};
