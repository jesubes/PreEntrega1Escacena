import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import "./ItemListContainer.css"


function ItemListContainer(props) {

    return (
        <div>
            <h1>{props.greeting}</h1>
            <FlexWrapper />

        </div>
    )
}

export default ItemListContainer