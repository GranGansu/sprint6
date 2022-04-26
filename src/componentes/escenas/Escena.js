import styled, { css } from 'styled-components';
import React, { useState, useEffect } from 'react';

function Escena(props) {
    const [count, setCount] = useState(0);
    const P = styled.p`border-radius:20px;border:2px solid gray;padding:10px;margin:5px;background:white;
    ${props => props.active && css`
    background:red;
    `}`
    useEffect(() => { props.refe.style.background = `url(img/${count + 1}.jpg)` })
    const frases = props.frase.map((prop, index) => {
        if (index === count) {
            return <P key={index} active>{prop.frase}</P>
        }
        return <P key={index}>{prop.frase}</P>
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