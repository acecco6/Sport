import "../assets/ItemListConteiner.css"

import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import React from "react";

function Item({item}) {
    
    
    return(
        <>
            {item.stock > 0 ?(
                 <div className="producto_content">
                 {   item.descuento==true ? (
                     <div className="producto__descuento">
                     <p>% {item.porcentaje}</p>
                     </div>
                 ):<></>}
                 
                 <div className="producto__img">
                     
                     <img src={item.imagen} />
                 </div>
                 <div className="producto__body">
                     <p className="body_nombre">{item.nombre}</p>
                     <p>Precio: { item.descuento==false ? (item.precio.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})):(item.precio-(item.precio*(item.porcentaje/100))).toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</p>
                     { item.procesador!=undefined ? (<p>Procesador: {item.procesador}</p>): <></>  }
                 </div>
                 <div className="producto__footer"  >
                     <div className="card__Add">
                         <Link to={`/item/${item.id}`}>Ver Detalle</Link>
                     </div> 
                 </div>
             </div>
            ):("")}
           
        </>
        
    )
}
export default Item