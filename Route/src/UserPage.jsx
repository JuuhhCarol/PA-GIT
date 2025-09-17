import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usersData } from './UsersDatas'; 

const UserPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const user = usersData.find(user => user.id === id);

  return (
    <div>
      <h1>Usuário {user.id}</h1>
      <p>Nome: {user.name}</p>
    </div>
  );
};

export default UserPage;
