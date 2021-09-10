import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

function CartWidget() {
    return(
        <>
            <FontAwesomeIcon icon={faShoppingBag} />
        </>
    )
}

export default CartWidget