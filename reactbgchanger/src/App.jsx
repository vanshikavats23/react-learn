import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className="h-screen w-full duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
          <button className='outline-none px-4 rounded-3xl' style={{ backgroundColor: 'pink' }} onClick={() => setColor('pink')}>
            Pink
          </button>
          <button className='outline-none px-4 rounded-3xl' style={{ backgroundColor: 'blue' }} onClick={() => setColor('blue')}>
            Blue
          </button>
          <button className='outline-none px-4 rounded-3xl' style={{ backgroundColor: 'red' }} onClick={() => setColor('red')}>
            Red
          </button>
          <button className='outline-none px-4 rounded-3xl' style={{ backgroundColor: 'green' }} onClick={() => setColor('green')}>
            Green
          </button>
          <button className='outline-none px-4 rounded-3xl' style={{ backgroundColor: 'yellow' }} onClick={() => setColor('yellow')}>
            Yellow
          </button>
          <button className='outline-none px-4 rounded-3xl' style={{ backgroundColor: 'purple' }} onClick={() => setColor('purple')}>
            Purple
          </button>
          <button className='outline-none px-4 rounded-3xl' style={{ backgroundColor: 'brown' }} onClick={() => setColor('brown')}>
            Brown
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
