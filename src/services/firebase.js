
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,doc, getDoc, addDoc, query, where} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAvwv9Jysk7_QNLV54dJSvKI0NBF9v_T_w",
  authDomain: "proyectofinalreactescacena.firebaseapp.com",
  projectId: "proyectofinalreactescacena",
  storageBucket: "proyectofinalreactescacena.appspot.com",
  messagingSenderId: "177657606088",
  appId: "1:177657606088:web:8547790d3254a822d51afd"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const  DB = getFirestore(FirebaseApp)


export function testDatabase(){

    console.log(FirebaseApp)
}

export async function getSingleItemFromAPI(id){
    const docRef = doc(DB,"productosMarroquineria",id)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
        return {
            ...docSnap.data(),
            id: docSnap.id,
        }
    } else {
        console.error("El producto no existe")
    }
}

export async function GetItemsFromAPI(){
    try {
        const collectionProductos = collection(DB, "productosMarroquineria")
        let respuesta = await getDocs(collectionProductos)

        const products = respuesta.docs.map(docu => {
            return {
                ...docu.data(),
                id: docu.id,
            }
        })

        return (products)
    } catch(error) {
        console.error(error)
    }
}

export async function getItemsFromAPIByCategory(categoryId) {
    const productsRef = collection(DB, "productosMarroquineria")
    const myQuery = query(productsRef, where("category", "==", categoryId));

    const productsSnap = await getDocs(myQuery);

    const products = productsSnap.docs.map((docu)=> {
        return {
            ...docu.data(),
            id: docu.id,
        };
    });

    return products;
}

export async function createBuyOrderFirestore(buyOrderData){
    const collectionRef = collection(DB, "buyorders");
    const docRef = await addDoc(collectionRef, buyOrderData);
    
    return docRef.id;

}

//Carga de productos local a Firebase
export async function exportItemsToFirestore(){
    const products = [
        {
            "id": 1,
            "title": "Mochila",
            "category": "mochilas",
            "stock": "5",
            "marca": "INFLUENCER",
            "descripcion": "mochila doble cierre, compartimiento interno, color negra",
            "precio": "1000",
            "img": "/img/producto1.jpg"
        },
        {
            "id": 2,
            "title": "Mochila",
            "category": "mochilas",
            "stock": "9",
            "marca": "AMAYRA",
            "descripcion": "morral color verde, detalles dorados, amarre ajustable",
            "precio": "2000",
            "img": "/img/producto2.jpg"
        },
        {
            "id": 3,
            "title": "Porta Celular",
            "category": "morrales",
            "stock": "6",
            "marca": "CHIMOLA",
            "descripcion": "mochila doble cierre, compartimiento interno, color negra",
            "precio": "4000",
            "img": "/img/producto3.jpg"
        },
        {
            "id": 4,
            "title": "Mochila Matera",
            "category": "mochilas",
            "stock": "3",
            "marca": "LSD",
            "descripcion": "mochila doble cierre, compartimiento interno, color negra",
            "precio": "5000",
            "img": "/img/producto4.jpg"
        },
        {
            "id": 5,
            "title": "Cartera Verde",
            "category": "carteras",
            "stock": "14",
            "marca": "AMAYRA",
            "descripcion": "Cartera Verde tamaño mediano, para todo uso",
            "precio": "1500",
            "img": "/img/producto5.jpg"
        },
        {
            "id": 6,
            "title": "Mochila Verde",
            "category": "mochilas",
            "stock": "8",
            "marca": "AMAYRA",
            "descripcion": "mochila doble cierre, compartimiento interno, color negra",
            "precio": "2000",
            "img": "/img/producto6.jpg"
        },
        {
            "id": 7,
            "title": "Mochila Roja",
            "category": "mochilas",
            "stock": "8",
            "marca": "CHIMOLA",
            "descripcion": "mochila doble cierre, compartimiento interno, color negra",
            "precio": "6900",
            "img": "/img/producto7.jpg"
        },
        {
            "id": 8,
            "title": "Mochila para Niña",
            "category": "mochilas",
            "stock": "10",
            "marca": "LSD",
            "descripcion": "mochila doble cierre, compartimiento interno, color negra",
            "precio": "1800",
            "img": "/img/producto8.jpg"
        },
        {
            "id": 9,
            "title": "Mochila Negra",
            "category": "mochilas",
            "stock": "12",
            "marca": "AMAYRA",
            "descripcion": "mochila doble cierre, compartimiento interno, color negra",
            "precio": "2900",
            "img": "/img/producto9.jpg"
        },
        {
            "id": 10,
            "title": "Billetera Negra",
            "category": "billeteras",
            "stock": "19",
            "marca": "UNICROSS",
            "descripcion": "Billetera y porta tarjetas hasta 6 unidades",
            "precio": "3500",
            "img": "/img/producto10.jpg"
        }
    ];

    const collectionRef = collection(DB, "productosMarroquineria")

    for(let item of products){
        const docRef = await addDoc(collectionRef, item)
        console.log("Documento creado con ID", docRef.id)
    }
}