import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  // const [dog, setDog] = useState({})
  const [user, setUser] = useState([])

  useEffect(()=>{
    // getDog();
    getUser();
  },[])

  // const getDog = async () =>{
  //   const response = await axios.get('https://dog.ceo/api/breeds/image/random')
  //   setDog(response.data);
  // }

  const getUser = async () =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    setUser(response.data)
  }


  return (
    <>
      {/* <img src={dog.message} alt="Fotinho" /> */}
      {/* <img src={dog.message}/>
      <button onClick={getDog}>Mudar Doguinho</button> */}
      <h1>Olá</h1>
      {
        user.map(user => (
          <li key={user.id}>{user.id} {user.name}</li>

        )) 
      }
    </>
  )
}

export default App