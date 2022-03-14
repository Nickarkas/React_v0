import React, { useState } from "react";

function Estadoo(props) {
    const [contador, setContador] = useState(0);
    //console.log(contador)
    return (
        <div>
            <h2>El Estado</h2>
            <button onClick={() => setContador(contador + 1)}>
                Contador    
            </button>
            <p>Has clickado {contador} veces</p>
        </div>)
}

export default Estadoo;