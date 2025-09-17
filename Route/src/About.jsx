import { useNavigate } from "react-router-dom"

export const About = () => {
    const navigate = useNavigate()

    return(
        <>
        <h1>Sobree</h1>
        <button onClick={()=> navigate('/')}>Clique aqui para navegar </button>
        </>
    )
}
