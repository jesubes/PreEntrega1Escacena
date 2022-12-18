import {useContext} from "react"
import cartContext from "../../storage/CartContext"
import Button from "../Button/Button"
import { Link, useNavigate } from "react-router-dom"
import { createBuyOrderFirestore } from "../../services/firebase"
import Swal from "sweetalert2"
import BuyForm from "./BuyForm"

function CartView(){
    const { cart, clear, removeItem, totalPriceInCart } = useContext(cartContext)
    const navigate = useNavigate();

    if(cart.length === 0 ) return (
        <>
            <h1>CARRITO VACIO</h1>
            <Link to='/'>
                <button>Volver al Catálogo</button>
            </Link>
        </>
    ) 

    function createBuyOrder(userData){
        const buyData = {
            buyer: userData,
            items: cart,
            total: totalPriceInCart(),
            date: new Date()
        }

        createBuyOrderFirestore(buyData).then(orderId => {
            console.log (orderId);
            clear();

            navigate(`/checkout/${orderId}`);

            Swal.fire({
                title: `Gracias por tu compra`,
                text: `El identificador de tu orden es ${orderId}`,
                icon: "success"
            })
        })
      

    }
    
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
                        <Button onClick={()=> removeItem(cartItem.id)} type= "denger">X</Button>
                    </div>
                ))
            }
            <Button type="denger" onClick= {clear}>
                Vaciar Carrito
            </Button>
            <h2>Total a pagar: ${totalPriceInCart()}</h2>
            <hr />
            <BuyForm onSubmit={createBuyOrder}/>
        </div>
    )
}

export default CartView