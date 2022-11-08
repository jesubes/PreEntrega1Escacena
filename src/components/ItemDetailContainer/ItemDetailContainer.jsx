import React, {useState, useEffect} from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

import Item from "../Item/Item";
import {getSingleItemFromAPI} from "../../mockService/GetItemsFromAPI";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";


function ItemDetailContainer () {
    const [product, setProduct] = useState([]);

    let params = useParams();
    let id = params.id;

    useEffect(
        () => {
            getSingleItemFromAPI(id).then((itemsDB) => {
                console.log(itemsDB);
                setProduct(itemsDB)
            })
        }, [id]
    )

    return (
        <div className="card-detail">
                <img src={product.img} alt="Product img" width="280px"/>
            <h2>{product.title}</h2>
            <p>{product.descripcion}</p>
            <h4>${product.precio}</h4>
        </div>
        
    )
}

export default ItemDetailContainer;