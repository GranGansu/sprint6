import styled from 'styled-components';
import React from 'react'

export default function Principal(props) {
    const P = styled.p`border-radius:20px;border:2px solid gray;padding:10px;margin:5px;`
    return (
        <div>
            <P>Bienvenida</P>
            <button onClick={()=>{props.condicion(true)}}>Comenzar</button>
        </div>
    );
}