
import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
