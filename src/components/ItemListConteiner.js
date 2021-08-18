import "../assets/ItemListConteiner.css"

import React from "react";

function ItemListConteiner(props) {
    return(
        <div className="Title-Portada">
            <h2>{props.greeting}</h2>
        </div>
    )
}
export default ItemListConteiner


