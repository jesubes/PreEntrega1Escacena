import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget"
import "./navBar.css"

function NavBar() {

    return (
        <nav className="navBar">
            <Link to= "/">
                <h1>Maitee Accesorios</h1>
            </Link>
            <div className="navBar__menu">
                <ul className="navBar__listado">
                    <li><Link to="/category/mochilas">Mochilas</Link></li>
                    <li><Link to="/category/carteras">Carteras</Link></li>
                    <li><Link to="/category/morrales">Morrales</Link></li>
                    <li><Link to="/category/billeteras">Billeteras</Link></li>
                </ul>
                <CartWidget />
            </div>
        </nav>
    )
}


export default NavBar