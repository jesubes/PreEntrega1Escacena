import React from 'react'
import './flexWrapper.css'


function FlexWrapper (props) {
    
    return (
        <div className='flexWrapper'>
            {props.children}
        </div>
    )
}


export default FlexWrapper;