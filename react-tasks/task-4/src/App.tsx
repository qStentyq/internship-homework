import { createContext, useState, Dispatch, SetStateAction } from 'react'
import './App.css'
import ComponentA from './components/ComponentA'

const CountContext = createContext<{ count: number; setCount: Dispatch<SetStateAction<number>> }>({
  count: 0,
  setCount: () => {}
})

const CounterProvider = () => {
  const [count, setCount] = useState(0);
 
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <App/>
    </CountContext.Provider>
  );
 };

function App() {
 

  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={{count, setCount}}>
      <ComponentA/>
    </CountContext.Provider>
  )
}

export {App, CountContext, CounterProvider}
