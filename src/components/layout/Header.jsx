import { NavLink } from "react-router-dom";
import { FaApple } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../context/shop_context";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [menuIcon, setMenuIcon] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setShowSearch, getCartCount, token, setToken, setCartItems } =
    useContext(ShopContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [token]); // Update user info when token changes

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // Remove user info on logout
    setToken("");
    setUser(null);
    setCartItems({});
  };

  return (
    <>
      <header className="section-navbar">
        <NavLink to="/">
          <FaApple className="logo" />
        </NavLink>
        <nav>
          <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className="navbar-lists">
              <li>
                <NavLink
                  to="/"
                  className="navbar-link home-link"
                  onClick={() => setMenuIcon(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="navbar-link"
                  onClick={() => setMenuIcon(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="navbar-link"
                  onClick={() => setMenuIcon(false)}
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="navbar-link"
                  onClick={() => setMenuIcon(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flx">
          <IoMdSearch onClick={() => setShowSearch(true)} className="logo-2" />
          <div className="profile-container">
            <CgProfile
              className="logo-1 profile-icon"
              onClick={() => {
                setDropdownOpen(!dropdownOpen);
                token ? null : navigate("/login");
              }}
            />

            {token && dropdownOpen && (
              <div className="dropdown-menu">
                {user ? (
                  <div
                    className="dropdown-item user-info"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <strong>{user.name}</strong>
                    <p>{user.email}</p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}

                <NavLink
                  to="/orders"
                  className="dropdown-item"
                  onClick={() => setDropdownOpen(false)}
                >
                  Orders
                </NavLink>
                <button className="dropdown-item logout-btn" onClick={logout}>
                  Logout
                </button>
              </div>
            )}
          </div>
          <NavLink to="/cart" className="navbar-link cart-trolley--link">
            <FiShoppingCart className="logo-1" />
            <span className="cart-total--item">{getCartCount()}</span>
          </NavLink>
          <div
            className="mobile-navbar-btn"
            onClick={() => setMenuIcon(!menuIcon)}
          >
            {menuIcon ? (
              <CgClose className="mobile-nav-icon close-outline" />
            ) : (
              <CgMenu className="mobile-nav-icon" />
            )}
          </div>
        </div>
      </header>
    </>
  );
};
