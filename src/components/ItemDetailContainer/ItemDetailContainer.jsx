import React, {useState, useEffect} from "react";



import { getSingleItemFromAPI } from "../../services/firebase";
import { useParams } from "react-router-dom";
import "./itemDetailContainer.css";

import ItemDetail from "./ItemDetail";


function ItemDetailContainer () {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    let params = useParams();
    let id = params.id;

    useEffect(
        () => {
            getSingleItemFromAPI(id).then((itemsDB) => {
                console.log(itemsDB);
                setProduct(itemsDB)
            })
            .finally(() => setIsLoading(false))
        }, [id]
    )
    
    if (isLoading) return <h2>Cargando...</h2>

    return (
        <div>
            <ItemDetail product={product}/>
        </div>
        
    )
}

export default ItemDetailContainer;