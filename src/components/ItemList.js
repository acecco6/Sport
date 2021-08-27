import { useEffect, useState } from "react";

import ItemCount from "./ItemCount";
import React from "react";

function ItemList() {
    const productos=[
        {id:1,nombre:"asdas",precio:5000,stock:6,imagen:"https://img.freepik.com/foto-gratis/forme-zapatos-corrientes-zapatilla-deporte-aislados-blanco_47469-442.jpg?size=626&ext=jpg",descipcion:"asdasdasdas"},
        {id:2,nombre:"asdasfgr",precio:6000,stock:4,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybQGtzP61VhSEgllTv4DuIjqrNxuLpBz-Hwce_cimpITlQRv-r8pCV9IYNhITlsvYtVE&usqp=CAU",descipcion:"adasdasferer"},
        {id:3,nombre:"wefwefw",precio:4000,stock:2,imagen:"https://mountain.zilendo.com/wp-content/uploads/2018/07/DAFENP-Zapatillas-Hombres-Mujer-Deporte-Running-Zapatos-para-Gimnasio-Sneakers-Deportivas-Transpirables-Casual-Unisex-36-46-0.jpg",descipcion:"afsgok fn"},
        {id:4,nombre:"wefwef",precio:3000,stock:7,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGZXv-t4qWQHvoBUnSkHUwWrVVu4FeVRpgSQFnNgt7cTOs-YjyAS-qLhxFCg3EcaanwwU&usqp=CAU",descipcion:"asdñk as iod "},
        {id:5,nombre:"fwe",precio:2600,stock:3,imagen:"https://home.ripley.com.pe/Attachment/WOP_5/2084222252704/2084222252704-2.jpg",descipcion:"asdj meifo q qw"},                    
        {id:6,nombre:"wefwef",precio:4300,stock:8,imagen:"https://home.ripley.com.pe/Attachment/WOP_5/2084222252742/2084222252742-1.jpg",descipcion:"alksd oqi"},
        {id:7,nombre:"qwfwdsv",precio:3600,stock:6,imagen:"https://m.media-amazon.com/images/I/41RqWhmbLjL.jpg",descipcion:"a sdasdaskldn ad"},
        {id:8,nombre:"qweqwf",precio:5200,stock:2,imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxAGi7yyusBACKziAMy32mYGftZYxJ7KhLyPQ1odPnHI1bbqx0SC1Q7JR90HcGKu3hZw&usqp=CAU",descipcion:"daksnd askdh"}
    ]
    const [producto, setproducto] = useState([])    
    const getProducto=()=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productos)
            },2000)
        })
    }
    useEffect(()=>{
        getProducto().then((productos)=>setproducto(productos))
    },[])

    return (
        <div className="item__content">
            {
                producto.map(
                    e=>
                    <div key={e.id} className="item__card">
                        <div className="item__card__img">
                            <img src={e.imagen} alt="imagen" />
                        </div>
                        <div className="item__card__description">
                            <ItemCount initial={1} stock={e.stock} onAdd={""} />
                        </div>
                    </div>
                ) 
            }
        </div>
    )
}

export default ItemList