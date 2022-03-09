import React, { Component } from "react";

const Boton = (props /*myOnClick*/) => {
    return (<button onClick={/*myOnClick*/props.myOnClick}>Boton hecho componente</button>)
}

export class MasSobreEventos extends Component{

    handleClick = (e, msg) => {
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(msg)
    }

    render(){
        return (
            <div> 
                <h2>Mas sobre eventos</h2>
                <button onClick={(e) => this.handleClick(e,"Hola World")}>Saludar</button>
                {/* Evento Personalizado
                <Boton onClick={(e) => this.handleClick(e,"Hola World")}/>
                */}
                <Boton myOnClick={(e) => this.handleClick(e,"Hola World evento por componnete")}/>
            </div>
        )
    }
}