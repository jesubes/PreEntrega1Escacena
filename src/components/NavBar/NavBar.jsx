import "./navBar.css"
import CartWidget from "../CartWidget/CartWidget"


function NavBar() {

    return (
        <div className="navBar">
            <h1>Maitee Accesorios</h1>
            <div className="navBar__menu">
                <ul className="navBar__listado">
                    <li><a href="#">Mochilas</a></li>
                    <li><a href="#">Carteras</a></li>
                    <li><a href="#">Morrales</a></li>
                    <li><a href="#">Billeteras</a></li>
                </ul>
                <CartWidget />
            </div>
        </div>
    )
}


export default NavBar