import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const addvalue = () => {
    setCount(count + 1)
    console.log("clicked", count)
  }
  const removevalue = () => {
    if(count===0){
      alert("Value Cant be less than zero")
      console.log("Value Cant be less than zero")
    }
    else{
     setCount(count-1)
    }
  
  }


  return (
    <>
      <h1>Counter is : {count}</h1>
      <button onClick={addvalue}>Increment</button>
      <button onClick={removevalue}>Decrement</button>

    </>
  )
}

export default App
