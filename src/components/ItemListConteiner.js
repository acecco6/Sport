import "../assets/ItemListConteiner.css"

import ItemList from "./ItemList";
import React from "react";

function ItemListConteiner(props) {
    return(
        <div className="items">
            <div className="Title-Portada">
                <h2>{props.greeting}</h2>
            </div>
            <ItemList />
        </div>
        
    )
}
export default ItemListConteiner


