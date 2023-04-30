import { useState } from "react"
import { AddCategory, GifGrid } from "./components";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    // siempre debemos inicializarlo, en este caso como un arreglo
    const [categories, setCategories] = useState(['One Piece'])

    const onAddCategory = (newCategory) => {
        // console.log('Valorant');
        // setCategories( (newCategory) => {
        // no podemos hacer uso de push, ya que el metodo realzia mutaciones y react evita realizar mutaciones al estado
        //     categories.push('Valorant')
        // })

        // creamos un nuevo arreglo/estado
        // con (...), realizamos una copia del state y despues le agregamos valorant
        // setCategories([...categories, 'Valorant'])
        //o
        // setCategories( cat => [...cat, 'Valorant'])
        // console.log(newCategory);
        // validamos, que si incluye el nuevo input enviado, no se agrege y se retorne
        if (categories.includes(newCategory)) return;
        setCategories(cat => [newCategory, ...cat])


    }
    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            {/* creamos un nuevo componente, el cual se le agrega un atributyo con el nombre setCategories
            el cual recibe como argumento una funcion setCategories */}
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={onAddCategory}
            />


            {/* intorducir algo, input */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            {/* <ol> */}
            {/* elemnto a duplicar */}
            {/* <li></li> */}
            {/* con map, barremos cada uno de los eleentos del arreglo y regresar algo nuevo */}
            {
                categories.map(category =>
                    // // debemos proporcionar un key, de lo contrario nos dara error y debe ser unica
                    // (
                    //     <div key={ category }>
                    //         <h3> {category}</h3>
                    //         <li>{ category }</li>
                    //     </div>
                    // )
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
            }

            {/* </ol> */}
            {/* listado de targetas/gifs */}
            {/* gif item */}
        </>
    )
}
