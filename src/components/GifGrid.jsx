import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading} = useFetchGifs(category);

    // console.log({images, isLoading});
    

    return (
        <>
            <h3>{category}</h3>
            {/* <h5>{counter}</h5> */}
            {/* <button onClick={() => setCounter(counter + 1)}>+1</button> */}
            {/* Cargar el isloading */}
            {/* Primera forma de usar el isloading */}
            {/* {
                isLoading
                ? (<h2>Cargando...</h2>)
                : null
            } */}
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            {/* Segunda forma de usar el isloading */}
            {/* podriamos crear un nuevo componente que se encargue de la logica de mostrar el mensaje de cargando */}

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
