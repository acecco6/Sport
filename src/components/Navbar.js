import "../assets/navbar.css"

import { faAngleUp, faBars, faEnvelope, faPhoneAlt, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from "react";

import CartWidget from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import React from "react";
import { contexto } from "./CartContext";

function Navbar() {
    document.title = 'Radtek';
    const {ProductoCarrito,Search} =useContext(contexto)
    const [navPosition, setnavPosition] = useState(false)
    const [MenuDown, setMenuDown] = useState(false)
    const [countCarrito,setcountCarrito]= useState(ProductoCarrito.length)
    
    function ActiveMenu() {
        setMenuDown(!MenuDown)
    }
    useEffect(() => {
        setcountCarrito(ProductoCarrito.length)
    }, [ProductoCarrito])
    
    const changeNavBar= () =>{
        if (window.scrollY>=205 && window.innerWidth>520) {
            setnavPosition(true)
        }else{
            setnavPosition(false)
        }
    }
    window.addEventListener("scroll",changeNavBar)
    
    function SearchCapture(e){
        Search(e.target.value)
    }




    
    return(
        <>
        <div id="Header">
            <div className="head__info">
                <div id="info_botom">
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
                        <a><FontAwesomeIcon icon={faUser} /><p>Account</p></a>
                    </div>
                </div>
            </div> 
            <div className="head__local">
                <div className="local__logo">
                    <h1><span>R</span>adtek</h1>
                    <FontAwesomeIcon onClick={ActiveMenu} icon={faBars} />
                </div>
                <div className="local__search">
                    <input id="search" type="search" onChange={SearchCapture} placeholder="Buscar" />
                    <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </div>
                <Link to="/cart">
                <div className="local__bag">
                    <CartWidget/> 
                    <div className="local__bag_number">
                        <p>{countCarrito}</p>
                    </div>
                </div>
                </Link>
            </div>

            <div className={navPosition? ("head__nav nav_position") :(MenuDown ?("head__nav setMenuDown"):"head__nav setMenuUp")  }>
                <ul>
                    <li><Link onClick={ActiveMenu} to="/">inicio</Link></li>
                    <li><Link onClick={ActiveMenu} to="/categoria/2">notebooks</Link></li>
                    <li><Link onClick={ActiveMenu} to="/categoria/1">celulares</Link></li>
                    <li><Link onClick={ActiveMenu} to="/categoria/3">monitores</Link></li>
                    <li id="bag-movil"><Link onClick={ActiveMenu} to="/cart">Carrito <CartWidget/> {countCarrito}</Link> </li>
                    <li><a onClick={ActiveMenu} href="#footer">contacto</a></li>
                    <li>
                        <input id="search_movil" type="search" onChange={SearchCapture} placeholder="Buscar" />
                        <button id="search_buton_movil" onClick={ActiveMenu} type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </li>
                </ul>
            </div>

        </div>
        {/* <div id="page-up" className={navPosition==true ? ("active"):""}>
            <a href="#Header"><FontAwesomeIcon icon={faAngleUp} /></a>
        </div> */}
        </>
    )
}
export default Navbar