import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value);
        
    }

    const onSubmit = ( event ) =>{
        //evitamos un refresh del navegador
        event.preventDefault();
        // validacion, de que tenga almenos dos caractes
        if ( inputValue.trim().length <= 1) return;
        // console.log(inputValue);
        // setCategories( categorias => [inputValue, ...categorias]);
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
