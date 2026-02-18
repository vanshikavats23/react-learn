import { useState , useCallback, useEffect, use} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
const [Password, setPassword] = useState('');

const passwordgenerator = useCallback(()=>{

  let pass="";
  let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberallowed){
    string+="0123456789";
  }
  if(charallowed) string+="`~[]{}+=_-;:.,@#$%^&*()?/|";
  for (let i = 1; i <= length; i++) {
    const char= Math.floor(Math.random() * string.length+1);
    pass += string.charAt(char);

  }
  setPassword(pass);

 },[length,numberallowed,charallowed,setPassword]);

 useEffect(()=>{
   passwordgenerator();
 },[length,numberallowed,charallowed,passwordgenerator]);

  return (
    <>
      <h1 className="text-4xl text-center font-bold">Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" 
      value={Password}
      className='flex-1 bg-gray-200 text-gray-700 p-2 text-center text-lg font-mono' 
      readOnly
       />
      <button className='bg-blue-500 text-white px-4 py-2'>Generate</button>
      
    </div>
      <div className='flex flex-col p-4'>
        <div className='flex justify-between text-sm'>
          <input 
          type="range"
          min={6}
          max={32}
          className='slider'
          onChange={(e)=>setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center mt-2'>
          <input 
          type="checkbox"
          id='numbers'
          className='mr-2'
          onChange={
            ()=>{
              setNumberallowed(prev=>!prev);
            }
          } 
          />
          <label htmlFor='numbers' className='text-sm'>Include Numbers</label>
        </div>
        <div className='flex items-center mt-2'>
          <input 
          type="checkbox"
          id='characters'
          className='mr-2'
          onChange={
            ()=>{
              setCharallowed(prev=>!prev);
            }
          }
           />
          <label htmlFor='characters' className='text-sm'>Include Special Characters</label>

        </div>
      </div>

    </>
  )
}

export default App
 