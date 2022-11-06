import React from "react";
import Button from "../Button/Button"
import './item.css'



function Item(props){
 
    return (
        <div className="card">
            <div>{ props.title }</div>
            <img src={props.img} alt="imagen" width="280px"></img>
            <Button color="#F1C43B">
               comprar
            </Button>
        </div>
    )
}


export default Item;