import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import "./cartWidget.css" 

function CartWidget () {

    return (
        <div>
            <a className="cartWidget__icon" href="#">
                <FontAwesomeIcon icon={faCartShopping} />
            </a>
          
        </div>
    )
}


export default CartWidget