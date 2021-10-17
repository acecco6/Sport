import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import Loader from "react-loader-spinner"
import React from "react";
import { firestore } from "./ItemCollection";
import { useParams } from "react-router-dom";

function ItemListConteiner() {
    const [producto, setproducto] = useState([])   
     
    const {id}=useParams()
    useEffect(()=>{
            // REFERENCIA A LOS PRODUCTOS
            const coleccion=firestore.collection("productos")
            // QUERY A LOS PRODUCTOS 
            if (id!=undefined) {
                setproducto([])
                const query=coleccion.where("categori","==",parseInt(id)).get()
                query.then((snapshot)=>{
                    let productos=[]
                    const docs=snapshot.docs
                    docs.forEach(doc => {
                        let producto=doc.data()
                        producto.id=doc.id
                        productos.push(producto)
                    });
                    setproducto(productos)
                })
            }else{
                setproducto([])
                const query=coleccion.get()
                query.then((snapshot)=>{
                    let productos=[]
                    const docs=snapshot.docs
                    docs.forEach(doc => {
                        let producto=doc.data()
                        producto.id=doc.id
                        productos.push(producto)
                    });
                    setproducto(productos)
                })
            }
    },[id])

    return(
        
        <div className="items">
            {producto.length == 0 ? (
                <div className="carga">
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={70}
                        width={70}
                    />
                </div>):(
                <ItemList items={producto} />
            )}
            
        </div>
    )
}
export default ItemListConteiner


