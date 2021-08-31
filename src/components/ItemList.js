import ItemCount from "./ItemCount";
import React from "react";

function ItemList({items}) {
    return (
        <div className="item__content">
            {
                items.map(
                    e=>
                    <div key={e.id} className="item__card">
                        <div className="item__card__img">
                            <img src={e.imagen} alt="imagen" />
                        </div>
                        <div className="item__card__description">
                            <ItemCount initial={1} stock={e.stock} onAdd={""} />
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default ItemList