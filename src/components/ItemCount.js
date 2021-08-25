import "../assets/item_count.css"

import React from "react";
import { useState } from "react";

function ItemCount({ initial, stock, onAdd}) {
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
        <div className="card">
            <p>Camisa Tiger</p>
            <div className="card__button">
                <button className="button_change" onClick={cantidadDown}>-</button>

                <p>{count}</p>

                <button className="button_change" onClick={cantidadUp}>+</button>
            </div>

            <div className="card__Add">
                <button onClick={onAdd}>
                    Agregar al Carrito
                </button>
            </div> 
        </div>
    )
}

export default ItemCount