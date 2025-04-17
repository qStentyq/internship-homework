
import Button from './components/Button/Button'
import './App.css'

function App() {


  return (
    <>
      <Button text='First button' color='wheat' onClickCustom={() => {console.log('Customed button 1')}}/>
      <Button text='Second button' color='red' onClickCustom={() => {console.log('Customed button 2')}}/>
    </>
  )
}

export default App
