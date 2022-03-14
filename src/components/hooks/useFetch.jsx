import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    //controlamos los datos que vienen, la inicializamos a null
    const [data, setData] = useState(null)
    //variable que controle la peticion, la incializamos a TRUE para que este "pendiente" de la peticion
    const [isPending, setIsPending] = useState(true)
    //variable de error para manipularlo si viene con error, la inicializamos en null (aunq podriamos no inicializarla)
    const [error, setError] = useState(null)

    //utilizaremos useEffect para guardar la peticion, se ejecutara cuando cambie la variable URL (por eso el corchete final para que se ejecute 1 vez)
    useEffect(()=>{
        //poner async la funcion de la peticion, NO EL USEEFFECT
        const getData = async (url) => {
            //hacemos la peticion con try-catch
            try{
                //variable res para recibir la peticion fetch de la url que le pasamos
                let res = await fetch(url);
                //si la resolucion de la peticion no es ok...
                if(!res.ok){
                    //emitimos el error:true, status:res.status, statusText:(si no trae "ocurrio un error") ? sino: res.statusText
                    //advertencia en ESLINT (no preocupante ya que me sugiere hacer un objeto error new Error())
                    throw { 
                        err:true, 
                        status:res.status, 
                        statusText: !res.statusText ? "Ocurrio un error" : res.statusText
                    };
                }
                //si no hay error, pasamos la resolcion a data -> json 
                let data = await res.json();
                //cambiamos los setStates cuando recibimos la peticion
                setIsPending(false);
                setData(data);
                setError({err:false});
            
            } catch(err){
                //si hubiera un error... cambiamos los setState tambien
                setIsPending(true);
                setError(err);
            }
        };
    
        //llamamos a la funcion async para que se ejecute
        getData(url);

    }, [url]);    //para que se de una sola vez
    //TODO LO QUE SEA RECORRER LO QUE NOS DEVUELVE LA PETICION, SE HACE DESDE EL COMPONENTE, AQUI SOLO SE HACEN PETICIONES.


    //devolvemos "data", "isPending", "error" para controlar las 3 const que hemos creado
    return{ data, isPending, error };
}
