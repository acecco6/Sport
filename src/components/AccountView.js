import Login from "./Login";
import React from "react";
import Register from "./Register";
import { useState } from "react";

function AccountView() {
    const [ingreso, setingreso] = useState(true)
    function active(op){
        if (op==true) {
            setingreso(true)
        }else{
            setingreso(false)
        }
    }
    
    return(
        <div id="conterAccount">

            <div className="cuenta__card__header">
                    <p onClick={()=>active(true)} className={ingreso?("cuenta__card__header_active"):""}>Ingresar</p>
                    <span>|</span>
                    <p onClick={()=>active(false)} className={ingreso==false?("cuenta__card__header_active"):""}>Registrase</p>
            </div>
            <div className="cuenta__card__content">
                {
                    ingreso? (<Login />):(<Register />)
                }
                
            </div>
            
        </div>
    )
}

export default AccountView