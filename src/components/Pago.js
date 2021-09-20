import "../assets/pagar.css"

import { useContext, useEffect, useState } from "react";

import Loader from "react-loader-spinner"
import React from "react";
import { Redirect } from "react-router-dom";
import { contexto } from "./CartContext";

function Pago() {
    const [Tarjet, setTarjet] = useState("https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png")
    const [Pago, setPago] = useState(false)
    const [Procesando, setProcesando] = useState(false)
    const [redirect, setredirect] = useState(false)
    const [Timer, setTimer] = useState(3)
    const {clear}=useContext(contexto)
    
    
    useEffect(() => {
        if (Procesando) {
            if (Timer>=0) {
                setInterval(() => {
                    setTimer(Timer-1)
                },1000 );   
            }else{
                clear()
                setredirect(true)
            }
        }
    },[Timer][Procesando])

    function cambPago() {
        setPago(true)
        setTimeout(() => {
            setProcesando(true)
        }, 3000);
    }


    function Tarjetvalue(e) {
        switch (e.target.value) {
            case "Visa":
                setTarjet("https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png")
            break;
            case "Mastercard":
                setTarjet("https://cam.mastercard.com/content/dam/mccom/global/logos/logo-mastercard-mobile.svg")
            break;
            case "Naranja":
                setTarjet("https://upload.wikimedia.org/wikipedia/commons/f/f5/Logo_Naranja.png")
            break;
        }
    }
    
    return(
        <div className="form_pago_content">   
        <form id="Form">
            <div className="tarjet_select">
                <p>Seleccione la Tarjeta:</p>
                <div >
                    <select onChange={(e)=>Tarjetvalue(e)} className="tarjet">
                        <option >Visa</option>
                        <option>Mastercard</option>
                        <option>Naranja</option>
                    </select>
                </div>
            </div>
            <div className="form_img">
            <img src={Tarjet} width="200" height='80' id='credit-card-image'></img>
            </div>
            <div className="form_body">
                <label>Numero De Tarjeta</label>
                <input type="number" />

                <label>Nombre De la Tarjeta</label>
                <input></input>
                
                <label>Fecha de Expiracion</label>
                <input type="month"></input>
                
                <label>CVC</label>
                <input type="number"></input>
            </div>
            <div id="pagar" onClick={cambPago}>
                Pagar
            </div>
        </form>
        {Pago==false? "":(
        
        <div id="verify_datos">
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
                <p id="redi">Sera Redirijido en: {Timer}</p>
                {redirect==true? <Redirect to="/" />:""}
                </div>
                
            )}
            
            
           
            
        </div>)}
        
    </div>
    )
}
export default Pago