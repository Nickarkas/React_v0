import React, { useState } from "react";


export default function Contador(props) {
    const [contador, setContador] = useState(0);
    //console.log(useState());
    
    const sumar = () => setContador(contador + 1)

    const restar = () => setContador(contador - 1)

    return (
        <> 
            <h2>Hooks - useStates</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
                <p>Contador de {props.titulo} </p>
                <p>{contador}</p>
            </nav>
        </> 
    );
}

//accedemos a las PROPS del objeto contador
Contador.defaultProps = {
    titulo: "Clicks",
}