import { useState , useCallback} from 'react'
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
  if(charallowed) string+="`~[]{}+=_-;:.,";
  
},[length,numberallowed,charallowed,setPassword]);
  return (
    <>
      <h1 className="text-4xl text-center font-bold">Password Generator</h1>
    </>
  )
}

export default App
 