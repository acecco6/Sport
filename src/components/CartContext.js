import { Context, createContext, useState } from "react";

import React from "react";

export const contexto=createContext()
const {Provider}=contexto

function CartContext({children}){
    const [ProductoCarrito, setProductoCarrito] = useState([])

    function addItem(detalle,cantidad){
        let exist=ProductoCarrito.find(i=>i.item.id==detalle.id)
        if(exist!=undefined){
            for (const e of ProductoCarrito) {
                if(e.item.id==detalle.id){
                    e.cantidad+=cantidad
                }
            }
        }else{
            let producto={"item":detalle,"cantidad":cantidad}
            setProductoCarrito(ProductoCarrito=>[...ProductoCarrito, producto])
        }
    }
    
    function removeItem(id){
        console.log(id)
        let item=ProductoCarrito.filter(i=>i.item.id!=id)
        console.log(item)
        setProductoCarrito(item)
        
    }

    function clear(){
        setProductoCarrito([])
    }

    return(
        <Provider value={{ProductoCarrito,addItem,removeItem,clear}}>
            {children}
        </Provider>
    )
}

export default CartContext