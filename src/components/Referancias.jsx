import React, { createRef, useRef } from 'react'

export default function Referencias() {
    
    //REFERENCIA selector que existe en el DOM pero dentro de REACT
    let refMenu = useRef(),
        refMenuBotton = useRef();

        //console.log(refMenu, refMenuBotton);

    const handleToggleMenu = (e) =>{
       /*  --------- Js Vanilla ---------
        const $menu = document.getElementById('menu');

        if(e.target.textContent === "Menu"){
            e.target.textContent = "Cerrar";
            $menu.style.display = "block";
        } else {
            e.target.textContent = "Menu";
            $menu.style.display = "none";
        }
        */
        // ------ useRef ------
        if(refMenuBotton.current.textContent === "Menu"){
            refMenuBotton.current.textContent = "Cerrar";
            refMenu.current.style.display = "block";
        } else {
            refMenuBotton.current.textContent = "Menu";
            refMenu.current.style.display = "none";
        }

    }        
    return(
        <>
            <h2>Referencias</h2>
            <button id="menu-btn" ref={refMenuBotton} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{ display: "none"}}>
                <br /><a href="#">Seccion 1</a>
                <br /><a href="#">Seccion 2</a>
                <br /><a href="#">Seccion 3</a>
                <br /><a href="#">Seccion 4</a>
                <br /><a href="#">Seccion 5</a>
            </nav>
        </>
    );
}