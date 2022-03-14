import React, {useState, useEffect} from "react";

export default function ScrollHooks(){
    //estado del escroll en Y 
    const[scrollY, setScrollY] = useState(0);
    //como se actualiza cada vez que subimos o bajamos
    useEffect(() => {
        //console.log("Moviendo Scroll")

        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return () => {
            window.removeEventListener("scroll", detectarScroll);
        };

    }, [scrollY]);
    //se ejecuta uan sola vez
    useEffect(() => {
        //console.log("Fase Montaje")
    }, []);
    //se actualiza "siempre"
    useEffect(() => {
        //console.log("Fase actualizacion")
    });
    //limpiar intervalos, manejadores eventos, AGREGAR RETURN Y FUNCION
    useEffect(() => {
        return () => {
            //console.log("Fase desmontaje")
        };
    });

    
    return (
        <>
            <h2>Hooks - useEffects y el Ciclo de vida</h2>
            <p>ScrollY del Navegador {scrollY} px </p>
        </>
    )
}