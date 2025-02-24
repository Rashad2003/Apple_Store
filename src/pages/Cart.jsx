import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shop_context";
import { Title } from "../components/layout/Title";
import { assets } from "../../public/frontend_assets/assets";
import { CartTotal } from "../components/UI/CartTotal";

export const Cart = () => {
  const { products, currency, cartItems, updateQuantity, clearCart } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        if (cartItems[items] > 0) {
          tempData.push({
            _id: items,
            quantity: cartItems[items],
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  if (cartData.length === 0) {
    return (
      <div className="EmptyDiv">
        <h3>No Items in Cart</h3>
      </div>
    );
  }

  return (
    <>
      <div className="ct--">
        <div className="ct_1">
          <div className="ct_2">
            <Title text1={"YOUR"} text2={"CART"} />
          </div>

          <div>
            {cartData.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <div className="ct_3" key={index}>
                  <div className="ct_4">
                    <img className="ct_5" src={productData.image[0]} alt="" />
                    <div>
                      <p className="ct_6">{productData.name}</p>
                      <div className="ct_7">
                        <p>
                          {currency}
                          {productData.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <input
                    onChange={(e) =>
                      e.target.value === "" || e.target.value === "0"
                        ? null
                        : updateQuantity(item._id, Number(e.target.value))
                    }
                    className="ct_8"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                  <img
                    onClick={() => updateQuantity(item._id, 0)}
                    className="ct_9"
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          <div className="cart-two-button">
            <NavLink to="/products">
              <button className="btn-atc">Continue Shopping</button>
            </NavLink>
            <button className="btn-atc btn btn-clear" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </div>
        <div className="ct_10">
          <div className="ct_11">
            <CartTotal />
            <div className="ckout">
              <button
                onClick={() => navigate("/place_order")}
                className="ckbtn"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
