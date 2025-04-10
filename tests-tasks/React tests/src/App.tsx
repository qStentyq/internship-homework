
import Greeting  from './components/Greeting/Greeting'
import Counter from './components/Counter/Counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'




function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting name='John'/>}/>
        <Route path="/counter" element={<Counter/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
