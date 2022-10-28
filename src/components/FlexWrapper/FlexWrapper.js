import React from 'react'
import Item from '../Item/Item'


function FlexWrapper () {
    
    return (
        <div className='flexWrapper'>
            <Item
                title="producto 1"
                img="/img/producto1.jpg"
            />
            <Item
                title="producto 2"
                img="/img/producto2.jpg"
            />
            <Item
                title="producto 3"
                img="/img/producto3.jpg"
            />
        </div>
    )
}


export default FlexWrapper;