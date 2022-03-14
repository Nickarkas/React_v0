import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name,}){
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
};

export default function AjaxHooks() {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        //poner async la funcion de la peticion, NO EL USEEFFECT
        const getPokemons = async (url) => {
            
            let res = await fetch(url),
                json = await res.json();
                
                json.results.forEach(async (el) => {
                    let res = await fetch(el.url),
                    json = await res.json();
                      //console.log(json);
                            let pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default,
                            };

                            setPokemons((pokemons) => [...pokemons, pokemon]);
                });
        }
    
        //llamamos a la funcion async
        getPokemons("https://pokeapi.co/api/v2/pokemon");

    }, []);    //para que se de una sola vez

    /* FETCH "LARGO"
    useEffect(() => {
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

                            setPokemons((pokemons) => [...pokemons, pokemon]);
                
                            }
                        )
                })
            })
    }, []);
    */

    return (
        <>
            <h2>Peticiones Asincronas en Hooks</h2>
            
            {pokemons.length === 0 ? (
                <h3>Cargando...</h3>
                ) : (
                pokemons.map(el => <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)
                )}
        </>
    )
}
