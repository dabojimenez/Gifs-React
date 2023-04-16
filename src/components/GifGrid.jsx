import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const [counter, setCounter] = useState(10)

    //cuando se renderice por primera vez, solo ahi realizaremos la peticion http
    //recibe dos argumentos, 
    //1 el efecto que queremos disparar,qe es un callback
    //2 liosta de dependencias, que son las condiciones en las cuales  queremos ejecutar el calback, el cual es opcional pero se recomienda enviar
    useEffect( () => {
        getGifs(category);
        //si yo dejo la lista de dependencias vacias, quiere decir q solo se va a disparar la primera vez que se crea nuestro componente
    }, [] )
    // getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <h5>{counter}</h5>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
        </>
    )
}
