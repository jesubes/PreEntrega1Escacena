import React, {useState} from "react"
import InputForm from "./InputForm"

function BuyForm(props){

    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: ""
    })
    
    function onInputChange(evt) {
        const inputName = evt.target.name
        const value = evt.target.value

        const newUserData = {...userData}
        newUserData[inputName] = value
        setUserData(newUserData)
    }

    function onSubmit(evt) {
        evt.preventDefault()
        props.onSubmit(userData)

    }

    return (
        <form onSubmit={onSubmit}>
            <InputForm title= "Nombre" name="name" value= {userData.name} onInputChange = {onInputChange}/>
            <InputForm title= "Teléfono" name="phone" value= {userData.phone} onInputChange = {onInputChange}/>
            <InputForm title= "Email" name="email" value= {userData.email} onInputChange = {onInputChange}/>
            <button
                onClick= {onSubmit}
                >
                    Crear Orden
            </button>
        </form>
    )
}

export default BuyForm