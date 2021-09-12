import React from "react";
import { useState } from "react";

function ItemCount({ initial,stock,onAdd }) {
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
            <div className="card__button">

                <div id="buton_contents">
                    <button className="button_change" onClick={cantidadDown}>-</button>
                    <p className="change">{count}</p>
                    <button className="button_change" onClick={cantidadUp}>+</button>
                </div>

                <div className="card__Add_detail">
                    <button onClick={onAdd}>Agregar al Carrito</button>
                </div> 
            </div>
        </>
    )
}

export default ItemCount