import React, {useState, useEffect} from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import products from "../../data/products";
import Item from "../Item/Item";
import GetItemsFromAPI from "../../mockService/GetItemsFromAPI";
import "./ItemListContainer.css";



function ItemListContainer(props) {
    const [produstsList, setProductsList] = useState([]);

    useEffect(
        () => {
            GetItemsFromAPI().then((itemsDB) => {
                console.log(itemsDB);
                setProductsList(itemsDB)
            })
        }, []
    )

    return (
        <div>
            <h1>{props.greeting}</h1>
            <FlexWrapper>        
               {
                produstsList.map( (product) =>
                    <Item 
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