import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter , setCounter] = useState(15);

  const add = ()=>{
    setCounter((c) => c+ 1)
    setCounter((c) =>  c + 1)
  }

  return (
      
      <>
      <h1 className='background-color-200'>{counter}</h1>
      <button onClick={add}>Increase</button>
      </>

  )
}

export default App
