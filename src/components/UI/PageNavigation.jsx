import { NavLink } from "react-router-dom";

export const PageNavigation = ({title}) => {
    return (
        <>
        <div className="pgNavi">
            <NavLink to="/products">
            products
            </NavLink>/{title}
        </div>
        </>
    )
};