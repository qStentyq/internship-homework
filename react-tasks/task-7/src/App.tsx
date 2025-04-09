
import React, {useState,useMemo, useCallback} from 'react'
import './App.css'


const LowCount = React.lazy(() => import('./components/LowCount/LowCount'))
import { Suspense } from 'react'

//Button component, re-renders even with memo
export const Button = React.memo(({ onClick, name }: { onClick: () => void , name : string}) => {
  console.log(`Button is re-rendered at ${new Date().toLocaleTimeString()}`);
  return <button onClick={onClick}>{name}</button>;
});

//memoized component
const MemoizedComponent = React.memo(function MemoizedHeavyComponent({heavyArray}: {heavyArray: number[]}) {
  console.log('Memoized component re-rendered')
  // Simulate a heavy computation
  return(
    <>
    {heavyArray.map((item, index) => {
      return (
        <span key={index}>
          {index % 2 === 0 ? item : ''}
        </span>
      )
    }
  )
}
</>)})

function App() {
  const [count, setCount] = useState(0)
  const [array, setArray] = useState(new Array(120).fill(0).map((_, index) => index))

  const buttonArray = Array(50).fill(0).map((_, index) => index)

  //Use memo for storing result of the function
  const buttonHandler = useMemo(() => () => setArray(buttonArray), []);
  //Use Callback for storing the function itself
  const buttonHandler2 = useCallback(() => setArray(buttonArray), []);
  
  return(<>
    <h1> Counter: </h1>
    <h1>{count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
    <h1> Memoized component:</h1>
    <MemoizedComponent heavyArray={array} />
    <h2> Memoized component is not re-rendering even when parent counter does</h2>
    <Suspense fallback={<h1>Loading...</h1>}>{count < 0 ? <LowCount/> : <> 
    <Button onClick={buttonHandler} name = {'useMemo'} />
    <Button onClick={buttonHandler2}  name = {'useCallback'}/>
    </>}
    </Suspense>
   
  </>)
}

export default App
