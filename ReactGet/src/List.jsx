import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRoute, Route, Routes } from 'react-router-dom'

function List() {
    const [users, setUser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data);
        setUser(response.data)
    }
    const openUserProfile = (user) => {
        navigate('/profile', { state: { user } })
    }


    return (
    <>
        <ul>
            {users.map((user) => (
                <li
                    key={user.id}
                    onClick={() => openUserProfile(user)}
                    style={{ cursor: "pointer", marginBottom: "8px" }}
                >
                    {user.id} - {user.name}
                </li>
            ))}
        </ul>
    </>
    )
}

export default List