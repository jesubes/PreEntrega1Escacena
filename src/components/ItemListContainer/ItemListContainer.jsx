import React, {useState, useEffect} from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

import Item from "../Item/Item";
import GetItemsFromAPI, {getItemsFromAPIByCategory} from "../../mockService/GetItemsFromAPI";
import {useParams} from "react-router-dom"
import "./ItemListContainer.css";



function ItemListContainer(props) {
    const [produstsList, setProductsList] = useState([]);
    const {categoryid} = useParams();
    console.log(categoryid)


    useEffect(
        () => {
            if(categoryid)
                getItemsFromAPIByCategory(categoryid).then((itemsDB) => {
                    setProductsList(itemsDB);
                });
            else{
                GetItemsFromAPI().then((itemsDB) =>{
                    setProductsList(itemsDB);
                })
            }
        }, [categoryid]
    )

    return (
        <div>
            <h1>{props.greeting}</h1>
            <FlexWrapper>        
               {
                produstsList.map( (product) =>
                    <Item 
                    product = {product}
                    key= {product.id}
                    title= {product.title}
                    price= {product.precio}
                    imgurl= {product.img}
                    detail= {product.descripcion}
                    />
                )
               }
            </FlexWrapper>

        </div>
    )
}

export default ItemListContainer