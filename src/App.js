
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './storage/CartContext';
import CartView from './components/CartView/CartView';

import { testDatabase } from "./services/firebase"

function App() {
  testDatabase();

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <header className="App-header">
            <NavBar/>
          </header>
          <Routes>
            <Route 
              path='/' element= {<ItemListContainer greeting = "listado de Productos!!!" />} 
            />
            <Route
              path='/category/:categoryid'
              element= { <ItemListContainer /> }
            />
            <Route
              path='/detalle/:id'  element= { <ItemDetailContainer/> } 
            />
            <Route 
              path='/cart' element={ <CartView/> } 
            />
            <Route 
              path='*' element={<h1>404: Ruta No Encontrada</h1>}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
