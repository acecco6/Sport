import "../assets/navbar.css"

import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                            <a> <FontAwesomeIcon icon={faShoppingCart} /> </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            
        </div>
    )
}
export default Navbar