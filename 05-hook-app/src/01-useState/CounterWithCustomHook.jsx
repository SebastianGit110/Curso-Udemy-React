import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, reset, decrement } = useCounter();
  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={(e) => increment(2)}>
        {/* solo con increment es como si se escribiera (event) => incement(event) porque al ser un eventoo lo primero que se envia es eso. Si queremos enviar algo aparte toca especificarlo () => functon(args) */}
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(3)}>
        -1
      </button>
    </>
  );
};
