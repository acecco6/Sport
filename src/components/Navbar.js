import "../assets/navbar.css"

import CartWidget from "./CartWidget";
import React from "react";

function Navbar() {
    return(
        <div className="Header">
            <div className="Header__logo">
                <h1>Sport</h1>
            </div>
            <div className="Header__nav">
                <nav>
                    <ul>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Tienda</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                        <li>
                            <a> <CartWidget /> </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            
        </div>
    )
}
export default Navbar