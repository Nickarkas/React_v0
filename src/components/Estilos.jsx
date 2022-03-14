import React from 'react';
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";

export default function Estilos(){

    let myStyles = {
        borderRadius: "0.75rem",
        margin: "2rem auto",
        maxWidth: "50%"
    }

    return(
        <section className="estilos">
            <h2>Estilos CSS en React</h2>
            <h3 className="bg-react">Estilos de hoja externa</h3>
            <h3 className='bg-react' style={{borderRadius:".5rem", margin:"1rem"}}>Estilos en linea</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en linea2</h3>
            <h3 className='bg-react'>Agregando Normalize con <br /> <code>@import-normalize;</code></h3>
            <h3 className={moduleStyles.error}>Estilos con modulos</h3>
            <h3 className={moduleStyles.succes}>Estilos con modulos</h3>
            <h3 className='bg-sass'>Estilos con Sass</h3>
        </section>
    )
}