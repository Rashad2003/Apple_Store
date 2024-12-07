import { CartItem } from "../components/UI/CartItem";
import { FormatPrice } from "../components/UI/FormatPrice";
import { useCartContext } from "../context/cart_context";
import { NavLink } from "react-router-dom";


export const Cart = () => {
    const {cart, clearCart, total_price, shipping_fee} = useCartContext();
    console.log(cart);

    if(cart.length === 0) {
        return (
            <div className="EmptyDiv">
                <h3>No Items in Cart</h3>
            </div>
        )
    }
    
    return (
        <>
        <section className="cs">
            <div className="container">
                <div className="cart_heading grid grid-five-column">
                    <p>Item</p>
                    <p className="cart-hide">Price</p>
                    <p>Quantity</p>
                    <p className="cart-hide">SubTotal</p>
                    <p>Remove</p>
                </div>
                <hr />
                <div className="cart-item">
                    {
                        cart.map((curElem) => {
                            return <CartItem key={curElem.id} {...curElem} />;
                        })
                    }
                </div>
                <hr />
                <div className="cart-two-button">
                    <NavLink to="/products">
                    <button className="btn-atc">Continue Shopping</button>
                    </NavLink>
                    <button onClick={clearCart} className="btn-atc btn btn-clear">Clear Cart</button>
                </div>
                <div className="order-total--amount">
                <div className="order-total--subdata">
                    <div>
                        <p>Sub Total:</p>
                        <p><FormatPrice price={total_price}/></p>
                    </div>
                    <div>
                        <p>GST:</p>
                        <p><FormatPrice price={shipping_fee}/></p>
                    </div>
                    <hr />
                    <div>
                        <p>Order Total:</p>
                        <p><FormatPrice price={total_price + shipping_fee}/></p>
                    </div>
                </div>
                </div> 
            </div>
        </section>
        </>
    )
};