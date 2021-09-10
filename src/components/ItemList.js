import "../assets/loader.css"

import { Link, useParams } from "react-router-dom";

import Item from "./Item"

function ItemList({items}) {
    let {id}=useParams()
    
    return (
        <div className="content__productos__pri">
            {items.length==0 ?(
                <div className="carga">
                    <div className="loader" id="loader">Loading...</div>
                </div>
            ):
                items.map(
                    e=>
                        <Item key={e.id} item={e} />
                ) 
            }
        </div>
    )
}

export default ItemList