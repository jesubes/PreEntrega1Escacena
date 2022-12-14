import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import {getItemsFromAPIByCategory} from "../../mockService/GetItemsFromAPI";

import { GetItemsFromAPI } from "../../services/firebase";

import {useParams} from "react-router-dom"
import "./ItemListContainer.css";



function ItemListContainer(props) {
    const [productsList, setProductsList] = useState([]);
    const {categoryid} = useParams();
    const [isLoading, setIsLoading] = useState()


    useEffect(
        () => {
            if(categoryid)
                getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
                    setProductsList(itemsDB);
                });
            else{
                GetItemsFromAPI().then((itemsDB) =>{
                    setProductsList(itemsDB);
                    setIsLoading(false)
                })
            }
        }, [categoryid]
    )

    return (
        <div>
            <h1>{props.greeting}</h1>
            <ItemList 
                productsList = { productsList }
            />

        </div>
    )
}

export default ItemListContainer