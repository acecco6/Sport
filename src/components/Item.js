import React from "react";

function Item({item}) {
    return(
        <div className="producto_content">
            <p>{item.nombre}</p>
            <p>{item.descipcion}</p>
            <p>{item.precio}</p>
            <p>cantidad en stock: {item.stock}</p>
            <img src={item.imagen} />
        </div>
    )
}
export default Item