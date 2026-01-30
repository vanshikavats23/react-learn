import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
const [Password, setPassword] = useState('');
  return (
    <>
      <h1 className="text-4xl text-center font-bold text-white-400">Password Generator</h1>
    </>
  )
}

export default App
 