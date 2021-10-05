import { Context, createContext, useState } from "react";
import React from "react";

export const contexto=createContext()
const {Provider}=contexto

function CartContext({children}){
    const [ProductoCarrito, setProductoCarrito] = useState([])
    const [SearchValue, setSearchValue] = useState("")

    function addItem(detalle,cantidad){
        let exist=ProductoCarrito.find(i=>i.item.id==detalle.id)
        if(exist!=undefined){
            for (const e of ProductoCarrito) {
                if(e.item.id==detalle.id){
                    let total=e.cantidad+cantidad
                    if(e.cantidad<e.item.stock && total<e.item.stock ){
                        e.cantidad+=cantidad
                    }else{
                        e.cantidad=e.item.stock
                    }
                    
                }
            }
        }else{
            let producto={"item":detalle,"cantidad":cantidad}
            setProductoCarrito(ProductoCarrito=>[...ProductoCarrito, producto])
        }
    }
    
    function removeItem(id){
        let item=ProductoCarrito.filter(i=>i.item.id!=id)
        setProductoCarrito(item)
        
    }

    function clear(){
        setProductoCarrito([])
    }

    function Search(dato){
        setSearchValue(dato)
    }

    return(
        <Provider value={{ProductoCarrito,SearchValue,addItem,removeItem,clear,Search,}}>
            {children}
        </Provider>
    )
}

export default CartContext