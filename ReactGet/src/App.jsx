import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [dog, setDog] = useState({})

  useEffect(()=>{
    getDog();
  },[])

  const getDog = async () =>{
    const response = await axios.get('https://dog.ceo/api/breeds/image/random')
    setDog(response.data);
  }


  return (
    <>
      {/* <img src={dog.message} alt="Fotinho" /> */}
      <img src={dog.message}/>
      <button onClick={getDog}>Mudar Doguinho</button>
    </>
  )
}

export default App