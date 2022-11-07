import products from "../data/products";

function GetItemsFromAPI () {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    })
}

export default GetItemsFromAPI;