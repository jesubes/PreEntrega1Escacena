import React from "react";
import { Link } from "react-router-dom";
import products from "../../data/products";
import Button from "../Button/Button"
import './item.css'



function Item(props){
    let urlDetail = `/detalle/${props.product.id}`

    return (
        <div className="card">
            <div>{ props.title }</div>
            <img src={props.imgurl} alt="imagen" width="280px"></img>
            <div>{props.price}</div>
            <div>{props.detail}</div>
            <Link to={ urlDetail }>
                <Button color="#F1C43B">
                    comprar
                </Button>
            </Link>
        </div>
    )
}


export default Item;