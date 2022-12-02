
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,doc, getDoc} from "firebase/firestore"


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
    const docRef = doc(DB,"produtosMarroquineria",id)
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
        const collectionProductos = collection(DB, "produtosMarroquineria")
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