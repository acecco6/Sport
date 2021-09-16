import "../assets/footer.css"

import React from "react";

function Footer() {
    return(
        <div id="footer">

            <div className="footer__dest">
                <div className="center">
                    <h2><span>R</span>adtek</h2>
                    <p>orem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T.</p>
                    <div>
                        
                    </div>
                </div>
                
            </div>

            <div className="footer__contac">
                <div className="center cente__mar">
                    <h3><span></span>Contact Info</h3>
                    <p><span>Address:</span> Your Address Goes Here.</p>
                    <p><span>Phone/Fax:</span> 0123456789</p>
                    <p><span>Email:</span> demo@example.com</p>
                </div> 
            </div>
            
            <div className="footer__copy">
                <p>© 2021 <span>R</span>adtek Made With  By Alejo Cecco.</p>
                <img src="https://vinotecalacristaleria.es/wp-content/uploads/2019/07/iconos-tarjetas-de-credito.png" />
            </div>
        </div>
    )
}
export default Footer