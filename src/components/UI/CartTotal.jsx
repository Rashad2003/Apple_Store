import { useContext } from "react";
import { ShopContext } from "../../context/shop_context";
import { Title } from "../layout/Title";

export const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return (
    <div className="cat_1">
      <div className="cat_2">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
      <div className="cat_3">
        <div className="cat_4">
          <p>SubTotal</p>
          <p>
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="cat_4">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="cat_4">
          <p>Total</p>
          <p>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </p>
        </div>
      </div>
    </div>
  );
};
