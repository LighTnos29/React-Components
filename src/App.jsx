import { useState } from 'react'
import './App.css'
import Silder from './components/Silder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Silder/>
    </>
  )
}

export default App
