import "../assets/loader.css"

import { Link, useParams } from "react-router-dom";

import ItemCount from "./ItemCount";

function ItemList({items}) {
    let {id}=useParams()
    
    return (
        <div className="item__content">
            {items.length==0 ?(
                <div className="carga">
                    <div className="loader" id="loader">Loading...</div>
                </div>
            ):
                items.map(
                    e=>
                    <div key={e.id} className="item__card">
                        <Link to={`/item/${e.id}`}><button className="ver-mas">Ver Detalle</button></Link>
                        <div className="item__card__img">
                            <img src={e.imagen} alt="imagen" />
                        </div>
                        <div className="item__card__description">
                            <ItemCount initial={1} stock={e.stock} onAdd={""} nombre={e.nombre} precio={e.precio} descipcion={e.descipcion} id={e.id} procesador={e.procesador} />
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default ItemList