import { useState, useContext } from "react"
import ItemCount from "../ItemCount/ItemCount"
import cartContext from "../../storage/CartContext"
import { Link } from "react-router-dom"


function ItemDetail({ product }) {
    const [isInCart, setIsInCart]= useState(false)

    const { addToCart} = useContext(cartContext)

    function onAddToCart(count){

        // alert(`Agregado ${count} ${product.title} al carrito`)

        const itemForCart = {
            ...product,
            count
        };

        addToCart(itemForCart)
        setIsInCart(true)
    }

    

    return(
        <div className="card-detail">
            <div className="card-detail_img">
                <img src={product.img} alt="Product img" width="280px"/>
            </div>
            <div className="card-detail_detail">
                <h2>{product.title}</h2>
                <p>{product.descripcion}</p>
                <h4>$ {product.precio}</h4>
            </div>
            {!isInCart ? (
                <ItemCount 
                text= "Agregar al Carrito"
                onAddToCart={onAddToCart}
                stock={product.stock} 
                />
            ) : ( 
                <div>
                    <Link to= '/cart'>
                        <button>Ir Al Carrito</button>
                    </Link>
                    <Link to= '/'>
                        <button>Volver al Catálogo</button>
                    </Link>
                    <Link>
                        <button>Quitar del carrito</button>
                    </Link>
                    
                </div>    
            )}
            
        </div>
    )
}

export default ItemDetail