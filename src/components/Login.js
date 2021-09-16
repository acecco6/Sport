import "../assets/login.css"

import React from "react";

function Login() {
    return(
        <>
            <div className="cuenta__card">
                <div className="cuenta__card__input">
                    <input type="text" placeholder="USUARIO"/>
                    <input type="password" placeholder="CONTRASEÑA"/>
                </div>
                <div className="cuenta__card__butons">
                    <button>INGRESAR</button>
                    <p>Olvido su Contraseña?</p>
                </div>
            </div>
        </> 
    )
}
export default Login
