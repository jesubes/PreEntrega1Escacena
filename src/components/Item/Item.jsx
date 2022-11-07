import React from "react";
import Button from "../Button/Button"
import './item.css'



function Item(props){
 
    return (
        <div className="card">
            <div>{ props.title }</div>
            <img src={props.imgurl} alt="imagen" width="280px"></img>
            <div>{props.price}</div>
            <div>{props.detail}</div>
            <Button color="#F1C43B">
               comprar
            </Button>
        </div>
    )
}


export default Item;