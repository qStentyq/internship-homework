import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
       
      <div className="card">
        <p>The counter:</p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>     
      </div>
     
    </>
  )
}

export default App
