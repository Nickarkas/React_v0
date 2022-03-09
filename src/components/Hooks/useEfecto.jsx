import React, { useState, useEffect } from "react";

/* Primer ejemplo useEffect */
function Efecto() {
    const [count, setCount] = useState(0);

    //similar a componentDidMount & componentDidUpdate
    useEffect(() => {
        //Actualiza el dituto del documento usando la Browser Api
        document.title = `Has clickado ${count} veces`;
    }, [count]); //Solo se vuelve a ejecutar si count cambia

    return (
        <div>
            <p>Has clickado {count} veces </p>
            <button onClick={() => setCount(count + 1)}>
                Contador    
            </button>
        </div>
    )
}

export default Efecto;

