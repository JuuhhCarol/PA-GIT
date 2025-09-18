import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-between min-h-screen'>
      <div className='min-h-screen flex justify-center items-center gap-80'>
          <div className='w-60 h-60 to-blue-700'></div>

          <div className='w-60 h-60 to-blue-700'></div>
            
          <div className='w-60 h-60 to-blue-700'></div>
          6
          <div className='w-60 h-60 to-blue-700'></div>
      </div>

      <div className='min-h-screen flex justify-center items-center gap-100'>

      </div>
        
    </div>
      
      
    </>
  )
}

export default App
