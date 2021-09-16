import "../assets/carrtito.css"

import { faArrowAltCircleLeft, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
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
            {ProductoCarrito.length==0 ?(<div id="volver"><p>No hay Producto en el carrito</p><Link to="/"><p><FontAwesomeIcon icon={faArrowAltCircleLeft} />Volver a la tienda</p></Link></div>):
            (
                <div className="carrito__content">
                    <div className="carrito__card">
                    <div className="carrito__info">
                        <h2>Carrito</h2>
                            <div className="info__card">
                                {ProductoCarrito.map(
                                    e=>
                                    <>
                                    <div className="info__card__img">
                                        <img src={e.item.imagen} />
                                    </div>
                                    <div className="info__card__nombre">
                                        <p>{e.item.nombre}</p>
                                    </div>
                                    <div className="info__card__cantidad">
                                        <p>{e.cantidad}</p>
                                    </div>
                                    <div className="info__card__total">
                                        <p>{e.item.descuento==false ? (e.item.precio.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})):(e.item.precio-(e.item.precio*(e.item.porcentaje/100))).toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</p>
                                        <FontAwesomeIcon onClick={()=>removeItem(e.item.id)} icon={faTimes} />
                                    </div>

                                    </>
                                )}
                            </div>
                        <div id="total">
                            <Link to="/"><p><FontAwesomeIcon icon={faArrowAltCircleLeft} />Volver a la tienda</p></Link>
                            <p>Total: <span>{Total.toLocaleString('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2})}</span></p>
                        </div>
                    </div>

                    <div className="carrito__detail">
                        <p className="detal__title">Detalles del Carrito</p>
                        <div>
                            <p>Tarjetas</p>
                            <img src="https://vinotecalacristaleria.es/wp-content/uploads/2019/07/iconos-tarjetas-de-credito.png" />
                            <div className="form">
                                <label for="numero">Numero de Tarjeta</label>
                                <input type="number" name="numero"></input>
                                <label>Fecha de Expiracion</label>
                                <input type="month" name="fecha"></input>
                                <label for="clave">Cw</label>
                                <input id="clave" type="number" name="clave"></input>
                            </div>
                            <button>Pagar</button>
                        </div>
                    </div>
                    </div>
                </div>
            )}
            
            
        
    </>
    )
}

export default Cart