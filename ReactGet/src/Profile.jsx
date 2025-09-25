import {useLocation} from 'react-router-dom'

function profile (){
    const location = useLocation();
    const {user}= location.state || {};
    
    if (!user) return <p>Nenhum usuario encontrado!</p>

    return(
        <div>
            <h2>Perfil do Usuario</h2>
            <p>Name: {user.name}</p>
            <p>E-mail:{user.email}</p>
            <p>Telefone:{user.phone}</p>
        </div>
    )
}
export default profile