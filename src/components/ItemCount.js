import "../assets/item_count.css"

import React from "react";
import { useState } from "react";

function ItemCount(props) {
    const [count, setCount] = useState(props.initial);

    function OnAdd(){
        console.log("Producto Camisa agregado")
        console.log("cantidad= "+count)
    }

    function cantidadUp() {
        if ( (count>=1) && (count<props.stock) ) {
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
                <button onClick={OnAdd}>
                    Agregar al Carrito
                </button>
            </div> 
        </div>
    )
}

export default ItemCount