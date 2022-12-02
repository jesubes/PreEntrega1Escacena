import FlexWrapper from "../FlexWrapper/FlexWrapper"
import Item from "../Item/Item"

function ItemList(props){
    let emptyArray = props.productsList.length === 0
    
    return(
        <FlexWrapper>        
            {
            emptyArray?
            <h2>Cargando...</h2>
            :
            props.productsList.map( (product) =>
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
    )
}

export default ItemList