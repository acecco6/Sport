import "../assets/loader.css"

import ItemCount from "./ItemCount";
import React from "react";

function ItemDetail({items}) {
    return(
        <>
        {items.length ==0 ? (
            <div className="carga">
                <div className="loader" id="loader">Loading...</div>
            </div>
            
        ):(
            <div className="item__content">
                <div key={items.id} className="item__card">
                    <div className="item__card__img">
                        <img src={items.imagen} alt="imagen" />
                    </div>
                    <div className="item__card__description">
                        <ItemCount initial={1} stock={items.stock} onAdd={""} nombre={items.nombre} precio={items.precio} descipcion={items.descipcion} />
                    </div>
                </div> 
            </div>
        )
        }
            
        </>
    )
}

export default ItemDetail