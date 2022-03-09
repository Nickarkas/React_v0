import React from "react";

function Propiedades(props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
        
        <ul>
            <li>{props.cadena}</li>
            <li>{props.number}</li>
            <li>{props.boolean ? "Verdadero" : "Falso"}</li>
            <li>{props.array.join(', ')}</li>
            <li>{props.array.map(props.funcion).join(", ")}</li>
            <li>{props.objeto.nombre + " - " + props.objeto.correo}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
        </ul>
        </div>
    )
}

Propiedades.defaultProps = {
    porDefecto: "Las Props"
}

export default Propiedades;