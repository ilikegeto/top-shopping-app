import { Link } from "react-router-dom";
import '../style/App.css'

export function Header(props) {
    return (
        <nav className="navbar">
            <div className="storename">{props.storeName}</div>
            <div className="store-stuff">
                <Link to="/" className="link">Home</Link>
                <Link to="/shop" className="link">Shop</Link>
                <Link to="/cart" className="link">
                    <img src="/img/shopping-cart.png" alt="shopping cart" className="cartimg"/>
                </Link>
            </div>
        </nav>
    );
}