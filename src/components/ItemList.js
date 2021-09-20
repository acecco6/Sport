import "../assets/loader.css"

import Item from "./Item"

function ItemList({items}) {
    
    return (
        <div className="content__productos__pri">
            {
                items.map(
                    e=>
                        <Item key={e.id} item={e} />
                ) 
            }
        </div>
    )
}

export default ItemList