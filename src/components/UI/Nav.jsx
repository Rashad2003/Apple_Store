import { NavLink } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useState } from "react";
import { useCartContext } from "../../context/cart_context";


const Nav = () => {
    const [menuIcon, setMenuIcon] = useState();
    const {total_item} = useCartContext();
    return (
        <>
        <nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className="navbar-lists">
                <li>
                    <NavLink to="/" className="navbar-link home-link" onClick={() => setMenuIcon(false)}>
                    Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcon(false)}>
                    About
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcon(false)}>
                    Products
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcon(false)}>
                    Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={() => setMenuIcon(false)}>
                    <FiShoppingCart className="cart-trolley"/>
                    <span className="cart-total--item"> {total_item} </span>
                    </NavLink>
                </li>
            </ul>

            <div className="mobile-navbar-btn">
            <CgMenu className="mobile-nav-icon" name="menu-outline" onClick={() => setMenuIcon(true)}/>
            <CgClose className="mobile-nav-icon close-outline" name="close-outline" onClick={() => setMenuIcon(false)}/>
            </div>
        </div> 
        </nav>
        </>
    )
};

export default Nav;