import React, { useState, useEffect } from "react";

//funcion RELOJ que devuelve la propiedad hora, desestructuracion para que no tengamos que poner Reloj(props)
function Reloj({hora}){
    return <h3>{hora}</h3>
};

export default function RelojHooks(){
    //vemos la hora 
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    //no se vera el reloj hasta q se inicie
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporizador;

        if(visible){
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
            }, 1000);
        } else {
            clearInterval(temporizador);
        }
        return () => {
            //console.log("Fase Desmonatje");
            clearInterval(temporizador);
        }
    }, [visible]);


    return (
        <>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hora={hour} />}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </>
    );
};