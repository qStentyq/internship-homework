import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/counter/counterSlice'
import { RootState } from '../../store'

export default function Counter() 
{
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
    <div className="card">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className=''>Current count is {count}</div>
    <p>
        
    </p>
    </div>

</div>
  )
}
