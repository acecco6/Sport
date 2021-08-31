import React from "react";
import { useState } from "react";

function ItemCount({ initial, stock, onAdd, nombre,descipcion,precio}) {
    const [count, setCount] = useState(initial);

    function cantidadUp() {
        if ( (count>=1) && (count<stock) ) {
            setCount(count+1) 
        }
    }
    function cantidadDown() {
        if (count>1) {
            setCount(count-1)    
        }
    }
    return(
        <>
            <p>{nombre}</p>
            <p>{descipcion}</p>
            <p>Precio: <span>${precio.toFixed(2)}</span></p>
            <div className="card__button">
                <button className="button_change" onClick={cantidadDown}>-</button>
                <p className="change">{count}</p>
                <button className="button_change" onClick={cantidadUp}>+</button>
            </div>

            <div className="card__Add">
                <button onClick={onAdd}>Agregar al Carrito</button>
            </div> 
        </>
    )
}

export default ItemCount