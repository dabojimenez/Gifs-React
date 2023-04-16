import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    // const [counter, setCounter] = useState(10)
    const [images, setImages] = useState([])
    const getImagenes = async () => {
        const newImages = await getGifs(category);
        setImages(newImages)
    }
    //cuando se renderice por primera vez, solo ahi realizaremos la peticion http
    //recibe dos argumentos, 
    //1 el efecto que queremos disparar,qe es un callback
    //2 liosta de dependencias, que son las condiciones en las cuales  queremos ejecutar el calback, el cual es opcional pero se recomienda enviar
    useEffect( () => {
        // getGifs(category);
        getImagenes();
        //si yo dejo la lista de dependencias vacias, quiere decir q solo se va a disparar la primera vez que se crea nuestro componente
    }, [] )
    // getGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {/* <h5>{counter}</h5> */}
            {/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
            <div className="card-grid">
                {
                    images.map( (image) => (
                        // <li key={id}>{title}</li>
                        <GifItem 
                            key={image.id}
                            //esto sirve, para que nuestro componente reciba todas las propiedades en este caso de images
                            //las reciba cada propiedad, sean properties
                            {...image}
                        />
                    ))
                }
                
            </div>
        </>
    )
}
