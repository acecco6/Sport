import "../assets/loader.css"

import ItemCount from "./ItemCount";

function ItemList({items}) {
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
                        <div className="item__card__img">
                            <img src={e.imagen} alt="imagen" />
                        </div>
                        <div className="item__card__description">
                            <ItemCount initial={1} stock={e.stock} onAdd={""} nombre={e.nombre} precio={e.precio} descipcion={e.descipcion} />
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default ItemList