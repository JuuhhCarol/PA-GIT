import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Helloworld } from './components/Helloworld'
import { PinkSquare } from '../BlueSquare/PinkSquare'
import { BlackSquare } from '../BlueSquare/BlackSquare'
import { BlueSquare } from '../BlueSquare/BlueSquare'
import { Square } from '../BlueSquare/Square'

function App() {
  const [cliques, setCliques] = useState(0); 
  const [cont, setCont] = useState(0); 
  const [name, setText] = useState('')
  const handleClick = () => {
    const novoTotalCliques = cliques + 1;
    setCliques(novoTotalCliques);
    if (novoTotalCliques % 10 === 0) {
      setCont(cont + 1);
    }
  };
 

  return (
    <>
    <button onClick={handleClick}>
      Contador: {cont}
    </button>
    </>
  )
}

export default App
