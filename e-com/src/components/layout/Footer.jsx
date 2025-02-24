import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="section-footer">
        <div className="footer-container container">
          <div className="content_1">
            <img src="/image/apple-logo-white.png" alt="logo" />
            <p>
              Welcome to Apple EcomStore, your ultimate destination for
              Cutting-Edge Gadgets!
            </p>
            <img src="/image/cards.png" alt="cards" />
          </div>
          <div className="content_2">
            <h4>SHOPPING</h4>
            <NavLink to="/products">iPhone Store</NavLink>
            <NavLink to="/products">Mac Store</NavLink>
            <NavLink to="/products">Accessories</NavLink>
            <NavLink to="/products">Sales & Discount</NavLink>
          </div>
          <div className="content_3">
            <h4>Experiance</h4>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/about" target="_blank">
              Payment Method
            </NavLink>
            <NavLink to="/about" target="_blank">
              Delivery
            </NavLink>
            <NavLink to="/about" target="_blank">
              Return and Exchange
            </NavLink>
          </div>
          <div className="content_4">
            <h4>NEWSLETTER</h4>
            <p>
              Be the first to know about New <br />
              Arrivals, Sales & Promo!
            </p>
            <div className="f-mail">
              <input type="email" placeholder="Your Email" />
            </div>
            <hr />
          </div>
        </div>
        <div className="f-design">
          <div className="f-design-txt">
            <p>Design and Code by Mohammed Rashad</p>
          </div>
        </div>
      </footer>
    </>
  );
};
