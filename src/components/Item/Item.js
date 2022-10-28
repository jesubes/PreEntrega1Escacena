import React from "react";
import './item.css'

function Item(props){
    
    return (
        <div className="card">
            <div>{ props.title }</div>
            <img src={props.img} alt="imagen" width="280px"></img>
        </div>
    )
}


export default Item;