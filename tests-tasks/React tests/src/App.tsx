
import Greeting  from './components/Greeting/Greeting'
import Counter from './components/Counter/Counter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import apiCallFunc from './utils/apiCall/apiCallFunc'




function App() {

  apiCallFunc('https://jsonplaceholder.typicode.com/posts/1')


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
