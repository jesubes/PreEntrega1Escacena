import products from "../data/products";

function GetItemsFromAPI () {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 800);
    })
} 

export default GetItemsFromAPI;

export function getSingleItemFromAPI (idParams) {
    
    return new Promise ((resolve) => {
        setTimeout (() => {
            let itemRequested = products.find(
                (item) => item.id === Number(idParams)
            );

            if (itemRequested) {
                resolve (itemRequested);
            }
        }, 1000)
    })
}


export function getItemsFromAPIByCategory (categoryid) {

    return new Promise ((resolve) => {
        setTimeout(() => {
            let itemsRequested = products.filter (item => item.category === categoryid)
            resolve(itemsRequested);
        }, 500);
    })
}