import {useContext} from "react"
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css" 

function CartWidget () {
    const { totalItemsInCart } = useContext(cartContext);

    return (
        <div>
            <Link to='/cart'>
                <span className="cartWidget__icon" href="#">
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
            </Link>
                {
                    (totalItemsInCart()>0)?
                    <span>{totalItemsInCart()}</span> 
                    : <></>
                }
            
        </div>
    )
}


export default CartWidget