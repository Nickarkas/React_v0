import React from 'react';
import { useFetch } from './hooks/useFetch'; //exportamos el useFetch para la peticion fetch personalizada, lo importamos y hacmeos para no la repeticion de codigo en la app

export default function HooksPersonalizados() {
    //creamos variable de url
    //let url = "https://pokeapi.co/api/v2/pokemon/";
    let url2 = "https://jsonplaceholder.typicode.com/users";
    //console.log(useFetch());
    //desestructuramos el return 
    //let {data, isPending, error} = useFetch(url);
    let {data, isPending, error} = useFetch(url2);
    return (
        <>
            <h2>Hooks Personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <h3>
                <pre style={{whiteSpace: "pre-wrap"}}>
                    <code>{JSON.stringify(data)}</code>
                </pre>
            </h3>
        </>
    )
}