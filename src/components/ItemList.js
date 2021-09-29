import "../assets/loader.css"

import { useContext, useEffect, useState } from "react";

import Item from "./Item"
import React from 'react';
import Reveal from 'react-reveal/Reveal';
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
                    e.stock == 0 ? console.log(e.stock):(
                        <Reveal>
                            <Item key={e.id} item={e} />
                        </Reveal>
                    )      
                ) 
            }
        </div>
    )
}

export default ItemList