import {useContext} from "react"
import cartContext from "../../storage/CartContext"
import Button from "../Button/Button"
import { Link } from "react-router-dom"

function CartView(){
    const { cart } = useContext(cartContext)

    if(cart.length === 0 ) return (
        <>
            <h1>CARRITO VACIO</h1>
            <Link to='/'>
                <button>Volver al Catálogo</button>
            </Link>
        </>
    ) 

    return(
        <div>
            <h1>Este es el contenido de tu Carrito</h1>
            {
                cart.map((cartItem) =>(
                    <div key={cartItem.id}>
                        <div className="card-detail_img">
                            <img src={cartItem.img} alt="Product img" width="280px" />
                        </div>
                        <div className="card-detail_detail">
                            <h2>{cartItem.title}</h2>
                            <h6>Precio: $ {cartItem.precio}</h6>
                            <h6>Cantidad: {cartItem.count}</h6>
                            <h4>Precio a Pagar: $ {cartItem.count * cartItem.precio}</h4>
                        </div>
                        <Button>X</Button>
                    </div>
                ))
            }
        </div>
    )
}

export default CartView