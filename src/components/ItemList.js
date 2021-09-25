import "../assets/loader.css"

import { useContext, useEffect, useState } from "react";

import Item from "./Item"
import { contexto } from "./CartContext";

function ItemList({items}) {
    const   [element, setelement] = useState([])
    const {SearchValue}=useContext(contexto)
    useEffect(() => {
        FiltrarBusqueda(SearchValue)
    },[SearchValue])

    function FiltrarBusqueda(data) {
        let p=items.filter((e) =>{
            if (e.nombre.toLowerCase().includes(data.toLowerCase())) {
                return e
            }
        })
        setelement(p)
    }
    
    return (
        <div className="content__productos__pri">
            {
                element.map(
                    e=>
                        <Item key={e.id} item={e} />
                ) 
            }
        </div>
    )
}

export default ItemList