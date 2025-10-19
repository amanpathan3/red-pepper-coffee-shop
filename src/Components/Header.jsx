import { Link } from 'react-router-dom';
import './Header.css';

export function Header(){
    return(
        <div className="navbar">
            <Link to="/" className="shop-logo">
                <div className="logo"><img src="../../public/Images/Red Pepper.png"/>
                </div>
            </Link>
            <div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#">Menu</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Order</Link></li>  
                    <li><Link to="contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}