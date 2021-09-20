import "../assets/carrtito.css"

import { faArrowAltCircleLeft, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import React from "react";
import { contexto } from "./CartContext";

function Cart() {
    const {ProductoCarrito,removeItem,clear} =useContext(contexto)
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
    
    useEffect(() => {
        total()
    }, [removeItem])
    
    return(
        <>
        {ProductoCarrito.length==0 ? (<div id="alert"><h2>No Hay Productos en el Carrito</h2><Link to="/"><span><FontAwesomeIcon icon={faArrowAltCircleLeft}/>Volver A la Tienda</span></Link></div>):(
            <div className="table__content">
            <h2>Detalle Carrito</h2>
            <div>
                <div className="table">
                    <div className="table__head">
                        <div>Imagen</div>
                        <div>Nombre</div>
                        <div className="table_cant">Cantidad</div>
                        <div>Precio</div>
                        <div className="table_op">Opciones</div>
                    </div>
                    <div className="table__body">
                        {
                            ProductoCarrito.map(
                                e=>
                                <div key={e.item.id} className="table_body_a">
                                    <div><img src={e.item.imagen} /> </div>
                                    <div>{e.item.nombre}</div>
                                    <div className="table_cant">{e.cantidad}</div>
                                    <div>{ e.item.descuento==false ? (e.item.precio.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})):(e.item.precio-(e.item.precio*(e.item.porcentaje/100))).toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</div>
                                    <div className="table_op"><FontAwesomeIcon onClick={()=>removeItem(e.item.id)} icon={faTrashAlt} /></div>
                                </div>
                            )
                        }         
                    </div>
                    <div className="table__footer">
                        <div id="total">Total:</div>
                        <div id="total_num">{Total.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</div>
                        <div id="comprar"><Link to="/Pagar">Comprar</Link></div>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}


export default Cart