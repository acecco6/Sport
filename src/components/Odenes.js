import "../assets/orden..css"

import { useEffect, useState } from "react";

import Loader from "react-loader-spinner"
import React from "react";
import { firestore } from "./ItemCollection";
import { useParams } from "react-router-dom";

function Ordenes() {
    const [Orden, setOrden] = useState([]) 
    const{id}=useParams()

    
    useEffect(() => {
        const collection = firestore.collection("ordenes")
        const query=collection.get()
        query.then((snapshot)=>{
            let i=[]
            for (const doc of snapshot.docs) {
                if (doc.id == id) {
                    let it=doc.data()
                    it.id=doc.id
                    i.push(it)
                }
            }
            setOrden(i)
            
        })
        
    },[])


    return(
        <div>
            {Orden.length!=0 ? Orden.map(e=>
            <div id="orden" key={e.id}>
                <h1 className="orden_Title">Orden de compra</h1>
                <p>Referencia: <span>{e.id}</span></p>
                <p>Nombre: <span>{e.buyer.nombre}</span></p>
                <p>Email: <span>{e.buyer.email}</span></p>
                <p>Telefono: <span>{e.buyer.tel}</span></p>
                <div className="oden__item">
                    <h2>Productos Comprados:</h2>   
                    {e.items.map(z=>
                        <p key={z.id}>{z.nombre}</p>
                    )} 
                </div>
            </div> 
            ):<><div className="carga">
                    <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={70}
                        width={70}
                    />
                </div></>
            }

        </div>
    )
}

export default Ordenes