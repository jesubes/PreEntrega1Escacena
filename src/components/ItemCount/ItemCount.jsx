import {useState} from "react"
import Button from "../Button/Button";

function ItemCount ({stock, onAddToCart, text}) {
    const [count, setCount] = useState (1)
    

    function handleAdd() {
        if (count < stock) setCount (count + 1)
    }

    function handleSubstract() {
        if (count > 1) setCount (count - 1);
    }

    return (
        <div className="itemcount_container">
            <div className="itemcount_control">
                <Button color= "#f6efa6" onClick={handleSubstract}>-</Button>
                <span>{count}</span>
                <Button color= "#fdfdf" onClick={handleAdd}>
                    +
                </Button>
            </div>
            <div className="itemcount_btns">
                <Button onClick={() => onAddToCart(count)}>{text}</Button>
            </div>
        </div>
    )
}

export default ItemCount