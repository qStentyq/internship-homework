import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from './counterSlice';
import { RootState } from '../../store';
import { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const [amountVal, setAmountVal] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className='counter_wrapper'>
      <div className='card'>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label='Increment by amount'
          onClick={() => dispatch(incrementByAmount(amountVal))}
        >
          Increment by {amountVal}
        </button>
        <button
          aria-label='Decrement by amount'
          onClick={() => dispatch(decrementByAmount(amountVal))}
        >
          Decrement by {amountVal}
        </button>
        <input
          className='inc_input'
          type='number'
          value={amountVal}
          onChange={(e) => setAmountVal(Number(e.target.value))}
        />
        <button aria-label='Reset' onClick={() => dispatch(reset())}>
          Reset
        </button>
        <div className='count_text'>Current count is {count}</div>
      </div>
    </div>
  );
}
