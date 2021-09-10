import "../assets/navbar.css"

import { faEnvelope, faPhoneAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'

import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
    return(
        <div className="Header">
            <div className="head__info">
                <div>
                    <p>Envíos y devoluciones completamente gratis en todo el mundo</p>
                </div>

                <div>
                    <div className="info__tel">
                        <FontAwesomeIcon icon={faPhoneAlt} /><p>+54 3756 489455</p>
                    </div>
                    <div className="info__mail">
                        <FontAwesomeIcon icon={faEnvelope} /><p>example@example.com</p>
                    </div>
                    <div className="info__cuenta">
                        <FontAwesomeIcon icon={faUser} /><p>Account</p>
                    </div>
                </div>
            </div> 
            <div className="head__local">
                <div className="local__logo">
                    <h1><span>R</span>adtek</h1>
                </div>
                <div className="local__search">
                    <input id="search" type="search" placeholder="Buscar" />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <div className="local__bag">
                    <CartWidget/>
                </div>
            </div>

            <div className="head__nav">
                <ul>
                    <li><Link to="/">inicio</Link></li>
                    <li><Link to="/categoria/2">notebooks</Link></li>
                    <li><Link to="/categoria/1">celulares</Link></li>
                    <li><Link to="/categoria/3">monitores</Link></li>
                    <li><a href="#footer">contacto</a></li>
                </ul>
            </div>

        </div>
    )
}
export default Navbar