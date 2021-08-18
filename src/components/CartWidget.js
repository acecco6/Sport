import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return(
        <>
            <FontAwesomeIcon icon={faShoppingCart} />
        </>
    )
}

export default CartWidget