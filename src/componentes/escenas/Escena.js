import styled, { css } from 'styled-components';
import React, { useState } from 'react';

function Escena(props) {
    const P = styled.p`border-radius:20px;border:2px solid gray;padding:10px;margin:5px;
    ${props => props.active && css`
    background:red;
    `}`
    const [count, setCount] = useState(0);
    const frases = props.frase.map((prop, index) => {
        if (index === count) {
            return <P key={index} active>{prop}</P>
        }
        return <P key={index}>{prop}</P>
    })
    return (
        <div>
            <Botones titulo='Anterior' contador={count - 1} estado={setCount} length={frases.length} />
            <Botones titulo='Siguiente' contador={count + 1} estado={setCount} length={frases.length} />{frases}
        </div>
    );
}

function Botones(props) {
    return (
        <button onClick={() => {
            if (props.contador === -1 || props.contador === props.length) {
                return null
            }
            return props.estado(props.contador)
        }}>{props.titulo}</button>
    )
}
export default Escena;