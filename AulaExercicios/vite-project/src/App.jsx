import { useEffect, useState } from 'react';

function App() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  const horaFormatada = horaAtual.toLocaleTimeString();

  return (
    <div style={{ textAlign: 'center', fontSize: '2rem' }}>
      <h1>Relógio Digital:</h1>
      <p>{horaFormatada}</p>
    </div>
  );
}

export default App;

