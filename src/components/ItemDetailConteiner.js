import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import React from "react";
import { firestore } from "./ItemCollection";
import { useParams } from "react-router";

function ItemDetailConteiner(props) {
    let {id}=useParams()
    const [producto, setproducto] = useState([])    
    useEffect(()=>{    
        // REFERENCIA A LOS PRODUCTOS
        const coleccion=firestore.collection("productos")
        // QUERY AL PRODUCTO 
        const query=coleccion.get()
            query.then((snapshot)=>{
                snapshot.forEach(doc => {
                    if (doc.id == id) {
                        setproducto(doc.data())    
                    }
                    
                });
                
            })

    },[])

    return(
        <div className="items">
            <ItemDetail items={producto} />
        </div>
    )
}
export default ItemDetailConteiner