import "../assets/loader.css"
import "../assets/itemdetail.css"

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
            <div className="item__detail">
                <div className="item__detail__img">
                    <img src={items.imagen} />           
                </div> 
                <div className="item__detail__description">
                { items.descuento==true ? (<div id="descuento"><p>Descuento - {items.porcentaje}%</p></div>):<></>}
                    <div id="description__pro">
                        <h2>{items.nombre}</h2>
                        <p>Precio: { items.descuento==false ? (items.precio.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})):(items.precio-(items.precio*(items.porcentaje/100))).toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</p>
                    </div>
                    <div id="description__pro_botom">
                        <p>{items.descipcion}</p>
                        <ItemCount initial={1} stock={items.stock} />
                    </div>
                    
                </div>
            </div>
        )
        }
            
        </>
    )
}

export default ItemDetail