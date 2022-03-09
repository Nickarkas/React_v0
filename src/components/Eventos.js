import React, { Component } from "react";



export class EventosES6 extends Component{
    constructor(props) {
    super(props);
    this.state = {
        contador: 0
        }
        //para vincular THIS a las funciones y metodos que abajo utilizare, fuera de la clase (JSstyle)
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this)
    }
    
    sumar(e){
        console.log("Sumando")
        //invoco la propiedad del constructor y la cambio
        this.setState({
            contador: this.state.contador + 1});
    }

    restar(e){
        console.log("Restando")
        //invoco la propiedad del constructor y la cambio
        this.setState({
            contador: this.state.contador - 1
        });
    }
    //"renderizo" lo que quiero ver en APP con la etiqueta del componente Evento
    render (){
    return (
        <div>
            <h2>Eventos en Componentes de Clase</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <p>{this.state.contador}</p>
        </div>
    )
    }
}


//DEBERIA IR EN OTRO INDEPENDIENTE
//Properties Initializaer
export class EventosES7 extends Component{
    
    state = {
        contador: 0
    };


//arrow functions

sumar = (e) => {
        console.log("Sumando")
        console.log(this)
        //invoco la propiedad del constructor y la cambio
        this.setState({
            contador: this.state.contador + 1});
    }

restar = (e) => {
        console.log("Restando")
        console.log(this)
        //invoco la propiedad del constructor y la cambio
        this.setState({
            contador: this.state.contador - 1
        });
    }
    //"renderizo" lo que quiero ver en APP con la etiqueta del componente Evento
    render() {
    return (
        <div>
            <h2>Eventos en Componentes de Clase ES7</h2>
            <nav>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button>
            </nav>
            <p>{this.state.contador}</p>
        </div>
    )
    }
}
