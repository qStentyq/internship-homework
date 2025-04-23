import React, { useState, useCallback, useMemo, Suspense } from "react";
import "./App.css";
const LowCount = React.lazy(() => import("./components/LowCount/LowCount"));
export const Button = React.memo(
  ({ onClick, name }: { onClick: () => void; name: string }) => {
    console.log(`Button is re-rendered at ${new Date().toLocaleTimeString()}`);
    return <button onClick={onClick}>{name}</button>;
  }
);
const MemoizedComponent = React.memo(function MemoizedHeavyComponent({
  heavyArray,
}: {
  heavyArray: number[];
}) {
  console.log("Memoized component re-rendered");
  const computedArray = useMemo(() => {
    return heavyArray.map((item, index) => (index % 2 === 0 ? item : ""));
  }, [heavyArray]);
  return (
    <>
      {computedArray.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </>
  );
});
function App() {
  const [count, setCount] = useState(0);
  const [array, setArray] = useState(() =>
    Array.from({ length: 120 }, (_, index) => index)
  );
  const buttonArray = useMemo(
    () => Array.from({ length: 50 }, (_, index) => index),
    []
  );
  const buttonHandler = useCallback(() => setArray(buttonArray), [buttonArray]);
  const buttonHandler2 = useCallback(
    () => setArray(buttonArray),
    [buttonArray]
  );
  return (
    <>
      <h1>Counter:</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <h1>Memoized component:</h1>
      <MemoizedComponent heavyArray={array} />
      <h2>
        Memoized component is not re-rendering even when parent counter does
      </h2>
      <Suspense fallback={<h1>Loading...</h1>}>
        {count < 0 ? <LowCount /> : null}
      </Suspense>
      {count >= 0 && (
        <>
          <Button onClick={buttonHandler} name='useMemo' />
          <Button onClick={buttonHandler2} name='useCallback' />
        </>
      )}
    </>
  );
}
export default App;
