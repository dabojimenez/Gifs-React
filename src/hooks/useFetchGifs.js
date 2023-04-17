import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    // const [counter, setCounter] = useState(10)
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImagenes = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
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
    getGifs(category);


  return {
    images,
    isLoading
  }
}
