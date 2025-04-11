import React from 'react'
import CounterChild from '../CounterChild/CounterChild'

export default function Counter({initialVal = 0}: {initialVal?: number}) {
    const [count, setCount] = React.useState(initialVal)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)
  return (
    <div>
        <h1>Counter</h1>
        <h2 data-testid="count">{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <CounterChild/>
    </div>
  )
}
