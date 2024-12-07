import { NavLink } from "react-router-dom"
import  Nav  from "../UI/Nav";
import { FaApple } from "react-icons/fa6";

export const Header = () => {
    return (
    <>
    <header className="section-navbar">
    <NavLink to="/">
    <FaApple  className="logo"/>
    </NavLink>
    <Nav />
    </header>
    </>
    );
};