import React, { useState } from 'react';
import './App.css';
import Frase from './componentes/escenas/Escena';
import PantallaPrincipal from './componentes/PantallaPrincipal';
import frases from './componentes/escenas/frases.json';

function Condicional(props) {
  const [condicion, setCondicion] = useState(false);
  return (<div>{condicion ? <Frase frase={frases} /> : <PantallaPrincipal condicion={setCondicion} /> }</div>)
}

function App() {
  return (
    <div>
      <Condicional></Condicional>
    </div>
  );
}

export default App;
