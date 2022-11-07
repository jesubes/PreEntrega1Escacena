
import React, { useState } from "react";
import "./button.css"


function Button ( props ) {
    const [ colorState, setColorState ] = useState( {backgroundColor: props.color })


    function handleClick() {
        console.log("click")
        // colorState = { bakcgrounColor: "#fff" }
        setColorState ( { backgroundColor: "#A2EAE2" } )
    }



    return (
        <button onClick={handleClick} style={ colorState } className="btn">
            { props.children }
        </button> 
    )
}


export default Button 