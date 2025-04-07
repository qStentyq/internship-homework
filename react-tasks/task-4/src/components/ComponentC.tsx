import  {useContext} from 'react'
import {CountContext} from '../App'

export default function ComponentC() {

const {count, setCount} = useContext(CountContext)
  return (
    <div>
        ComponentC, use context from App.tsx
        <div>Count: {count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
