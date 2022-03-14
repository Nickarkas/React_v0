import React, {Component} from "react";


export class Reloj extends Component {
    //constructor(props){
        //super(props);
    //}

    render() {
        return (
            <h3>
                {this.props.hora}
            </h3>
        )
    }

}



export default class CicloVida extends Component{
    constructor(props) {
        super(props)
        //console.log(0," componente se inicializa, aun NO esta en el DOM")
    //estado
    this.state = {
        //hora local
        hora: new Date().toLocaleTimeString(),
        //para ver o no le reloj cuando hacemos click
        visible: false
    }
    //para guardar "la hora"
    this.temporazidaor = null;
    
    }
    //componente se "Monta en el DOM"
    componentDidMount() {
        //console.log(1, "El componente ya esta en el DOM");
    }
    //pasa las propiedades del componente jusot antes d modificar el estado y mostrarnoslo
    //puede pasarse dos objetos, las PROPS previas y STATE previo
    componentDidUpdate(prevProps,prevStates) {
        //console.log(2, "El estado o las props han cambiado");
        //console.log(prevProps); //devulve objeto vacio xk no hay props
        //console.log(prevStates); //imprime un segundo antes del reloj visto por web
    }
    //aparecera cuando ELIMINAMOS el componente
    componentWillUnmount() {
        //console.log(3, "El componente desaparece del DOM");
    }

    tictac = () => {
        this.temporazidaor = setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000);
    }

    //funcion para iniciar reloj
    iniciar = () => {
        this.tictac();
        this.setState({
            visible: true
        })
    }

    //funcion para parar el reloj
    detener = () => {
        clearInterval(this.temporazidaor);
        this.setState({
            visible: false
        })
    }

    render() {
        //en consola vemos como se invoca una vez por segundo, segun el intervalo que redibuja la hora por pantalla
        //console.log(4, "componente se dibuja (o redibuja por cambio en el DOM)")
        return (
            <>
                <h2>Ciclo de Vida de los Componentes de Clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora}/>}
                <button onClick={this.iniciar}> iniciar </button>
                <button onClick={this.detener}> detener </button>
                
            </>
        )
    }
}