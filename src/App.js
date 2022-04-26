import React, { useState, useRef } from 'react';
import './App.css';
import Frase from './componentes/escenas/Escena';
import PantallaPrincipal from './componentes/PantallaPrincipal';
import frases from './componentes/escenas/frases.js';

const Condicional = (props) => {
  const ref = useRef(null);
  const [condicion, setCondicion] = useState(false);
  return (
    <div ref={ref}>
      {condicion ? <Frase frase={frases.frases} refe={ref.current} /> : <PantallaPrincipal condicion={setCondicion} />}
    </div>
  )
}

function App() {
  return (
    <div>
      <Condicional></Condicional>
    </div>
  );
}

export default App;
