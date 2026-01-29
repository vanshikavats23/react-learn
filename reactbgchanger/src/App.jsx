import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  return (
    <div className="h-screen w-full duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button onClick={() => setColor('blue')}>
            Blue
          </button>
          <button onClick={() => setColor('red')}>
            Red
          </button>
          <button onClick={() => setColor('green')}>
            Green
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
