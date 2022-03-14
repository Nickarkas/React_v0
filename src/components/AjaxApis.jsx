import React, { Component} from "react";

function Pokemon(props){
    return(
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AjaxApis extends Component {
    state = {
        //Array de pokemon
        pokemons:[]
    }

    componentDidMount(){
        let url = "https://pokeapi.co/api/v2/pokemon"
        fetch(url)
            .then(res => res.json())
            .then(json => {
                //console.log(json);
                //para ver las imagenes de cada uno de los elementos, forEach con peticion fetch de cada uno de los ELementos.url
                json.results.forEach((el) => {
                    fetch(el.url)
                        .then((res) => res.json())
                        .then((json) => {
                            //console.log(json);
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            };
                                // en vez de hacer un push al array, vamos actualizando por cada vuelta de bucle
                            let pokemons = [...this.state.pokemons, pokemon];
                                //pokemons : pokemons... lo simpolificamos al llamarse igual la variable
                            this.setState({ pokemons })
                            }
                        )
                })
            })


    }
    //renderizamos con una condicional, hasta q no carguen no aparecen y aparece "Cargando..."
    render() {
        return (
            <>
                <h2>Peticiones Asincronas en componentes de clase</h2>
                
                {this.state.pokemons.length === 0 ? (
                    <h3>Cargando...</h3>
                    ) : (
                    this.state.pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)
                    )}
            </>
        )
    }
}
