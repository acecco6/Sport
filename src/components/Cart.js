import "../assets/carrtito.css"

import { faArrowAltCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner"
import React from "react";
import { contexto } from "./CartContext";
import { firestore } from "./ItemCollection";

function Cart() {
    
    const {ProductoCarrito,removeItem,clear} =useContext(contexto)
    const [NomUsuario, setNomUsuario] = useState("")
    const [EmailUsuario, setEmailUsuario] = useState("")
    const [TelUsuario, setTelUsuario] = useState("")
    const [Pago, setPago] = useState(false)
    const [Procesando, setProcesando] = useState(false)
    const [IdOrden, setIdOrden] = useState("")
    const [Total, setTotal] = useState(0)
    
    function total() {
        let suma=0
        for (const it of ProductoCarrito) {
            if(it.item.descuento==true)
            suma+=(it.cantidad*it.item.precio)-(it.cantidad*it.item.precio*(it.item.porcentaje/100))
            else{
                suma+=it.cantidad*it.item.precio
            }
        }    
        setTotal(suma)
    }

    function ActiveRedirect(){
        setPago(true)
        GenerateOrders()
    }

    async function UpdateStock() {
        const collection=firestore.collection("productos")
        for (const producto of ProductoCarrito) {
            collection.doc(producto.item.id).update({
                stock:producto.item.stock-producto.cantidad
            })
        }
    }

    function GenerateOrders() {
        let item=[]
        let dia=new Date()
        let date = dia.getDate() + '-' + (dia.getMonth() + 1) + '-' + dia.getFullYear();
        for (const producto of ProductoCarrito) {
            const coleccion=firestore.collection("productos")
            let precio
            let nombre=producto.item.nombre
            let id=producto.item.id
            if (producto.item.descuento == true){
                precio=producto.item.precio-(producto.item.precio*(producto.item.porcentaje/100))
            }else{
                precio=producto.item.precio
            }
            let it={id:id,nombre:nombre,precio:precio}
            item.push(it)    
        }
            
        let orden={
            buyer:{nombre:NomUsuario,tel:TelUsuario,email:EmailUsuario},
            items:item,
            date:date,
            MontoTotal:Total
        }   
        UpdateStock()
        const colecction = firestore.collection("ordenes")
        const query=colecction.add(orden)
        query.then((docRef)=>{
            setIdOrden(docRef.id)
            setProcesando(true)
            clear()
        }) 
    }
    
    function CaptureNombre(e){
        setNomUsuario(e.target.value)
    }
    function CaptureEmail(e){
        setEmailUsuario(e.target.value)
    }
    function CaptureTel(e){
        setTelUsuario(e.target.value)
    }
    
    useEffect(() => {
        total()
    }, [removeItem])
    
    return(
        <>
        {ProductoCarrito.length==0 && Procesando==false? (
            <div className="empy">
                <p>No hay Productos en el carrito <Link to="/"><span><FontAwesomeIcon icon={faArrowAltCircleLeft}/>Volver a la Tienda</span></Link></p>
            </div>
            ):(
            <div className="carrito__content">
            {Pago==false? "":(
                <div id="process">
                    {Procesando==false?( 
                        <div className="esperando">
                            <Loader
                                type="TailSpin"
                                color="#ef233c"
                                height={40}
                                width={40}
                            />
                            <p>Procesando Pago</p>
                        </div>               
                    ):(
                        <div className="finalizado">
                            <img src="https://cdn1.iconfinder.com/data/icons/everyday-2/64/good_ok_check_mark-256.png" />
                            <p>Pago Realizado</p>
                            <div id="redi"><Link to={`/Comprobante/${IdOrden}`}>Ver la Orden de compra</Link></div>
                        </div>
                    )}
                </div>
            )}
            
            <div className="carrtio__card">
                <div className="carrito__items">
                    <div className="carrito__title tex_white">
                        <p>Resumen</p>
                        {/* <button onClick={ControlStock}>test</button> */}
                    </div>
                    <div className="carrito__items_body">
                        {ProductoCarrito.map(
                            e=>
                            <div key={e.item.id} className="items_body_content">
                                <div className="items_body_img">
                                    <img src={e.item.imagen} />
                                </div>
                                <div className="items_body_detail">
                                    <p>{e.item.nombre}</p>
                                    <p>Cantidad: {e.cantidad}</p>
                                    <p>{ e.item.descuento==false ? (e.item.precio.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})):(e.item.precio-(e.item.precio*(e.item.porcentaje/100))).toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</p>
                                    <div className="delete" onClick={()=>{removeItem(e.item.id)}}><FontAwesomeIcon icon={faTimes}/></div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className ="carrito__items_footer">
                        <p>Total: <span>{Total.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</span></p>
                        
                    </div>
                </div>
                <div className="carrito__compra">
                    <div className="carrito__title">
                        <p>Pago</p>
                    </div>
                    <div className="carrito__body">
                        <form onSubmit={(e)=>e.preventDefault()}>
                            <label>Numero de Tarjeta</label>
                            <input id="ccn" type="tel"    placeholder="xxxx xxxx xxxx xxxx" />
                            
                            <label>Nombre y Apellido</label>
                            <input onChange={CaptureNombre} type="text" placeholder="Nombre y Apellido" />

                            <label>Email</label>
                            <input onChange={CaptureEmail} type="mail" placeholder="Email" />

                            <label>Telefono</label>
                            <input onChange={CaptureTel} type="tel" placeholder="Telefono"/>
                            <div>
                                <button onClick={ActiveRedirect}>Enviar</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
        )}
        
        </>
    )
}


export default Cart