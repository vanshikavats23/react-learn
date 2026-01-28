import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addvalue = () => {
    setCount(count+1);
    console.log("clicked",count);


    
  }

  return (
    <>
      <h1>Counter is : {count}</h1>
      <button onClick={addvalue}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

    </>
  )
}

export default App
