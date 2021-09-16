import React from "react";

function Register() {
    return(
        <>
            <div className="cuenta__card">
                <div className="cuenta__card__input">
                    <input type="text" placeholder="USUARIO"/>
                    <input type="password" placeholder="CONTRASEÑA"/>
                    <input type="email" placeholder="EMAIL"/>
                </div>
                <div className="cuenta__card__butons">
                    <button>REGISTRARSE</button>
                </div>
            </div>
        </> 
    )
}
export default Register